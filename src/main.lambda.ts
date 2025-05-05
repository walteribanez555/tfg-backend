/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { firstValueFrom, ReplaySubject } from 'rxjs';
import { ValidationPipe } from '@nestjs/common';
// Declare a ReplaySubject to store the serverlessExpress instance.
const serverSubject = new ReplaySubject<Handler>();
async function bootstrap(): Promise<Handler> {
  console.log('COLD START: Initializing Nest');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

// Do not wait for lambdaHandler to be called before bootstraping Nest.
// Pass the result of bootstrap() into the ReplaySubject
void bootstrap().then((server) => serverSubject.next(server));

type EventPayload = {
  [key: string]: any;
};

export const handler: Handler = async (
  event: EventPayload,
  context: Context,
  callback: Callback,
) => {
  console.log('Handling request:', event);

  // Handle edge cases for root path
  if (
    (event.rawPath === '' || event.rawPath === undefined) &&
    (event.path === '' || event.path === undefined)
  ) {
    event.rawPath = '/';
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'Default route accessed', event }),
    });
    return;
  }

  console.log('Waiting for server to be initialized');
  console.log('Event:', event);
  // Convert the ReplaySubject to a Promise.
  // Wait for bootstrap to finish, then start handling requests.
  const server = await firstValueFrom(serverSubject);
  return server(event, context, callback);
};
