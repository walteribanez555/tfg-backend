import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './entities/collaborator.entity';

@Module({
  controllers: [CollaboratorController],
  providers: [CollaboratorService],
  imports: [TypeOrmModule.forFeature([Collaborator])],
  exports: [TypeOrmModule],
})
export class CollaboratorModule {}
