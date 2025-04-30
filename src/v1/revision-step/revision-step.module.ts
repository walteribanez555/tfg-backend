import { Module } from '@nestjs/common';
import { RevisionStepService } from './revision-step.service';
import { RevisionStepController } from './revision-step.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevisionStep } from './entities/revision-step.entity';

@Module({
  controllers: [RevisionStepController],
  providers: [RevisionStepService],
  imports: [TypeOrmModule.forFeature([RevisionStep])],
  exports: [TypeOrmModule],
})
export class RevisionStepModule {}
