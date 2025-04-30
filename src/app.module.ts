import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './v1/student/student.module';
import { ScholasticModule } from './v1/scholastic/scholastic.module';
import { ProfessionalModule } from './v1/professional/professional.module';
import { ModeModule } from './v1/mode/mode.module';
import { CourtModule } from './v1/court/court.module';
import { ReviewerModule } from './v1/reviewer/reviewer.module';
import { CollaboratorModule } from './v1/collaborator/collaborator.module';
import { DefenseModule } from './v1/defense/defense.module';
// import { AuthModule } from './v1/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './v1/common/common.module';
import { RevisionStepModule } from './v1/revision-step/revision-step.module';
import { CourtDetailModule } from './v1/court-detail/court-detail.module';
import { TfgModule } from './v1/tfg/tfg.module';

@Module({
  imports: [
    // AuthModule,
    StudentModule,
    ScholasticModule,
    ProfessionalModule,
    CommonModule,
    ModeModule,
    CourtModule,
    ReviewerModule,
    CollaboratorModule,
    DefenseModule,
    RevisionStepModule,
    CourtDetailModule,
    TfgModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5433', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
