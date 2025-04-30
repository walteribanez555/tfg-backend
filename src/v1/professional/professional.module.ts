import { Module } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
  imports: [TypeOrmModule.forFeature([Professional])],
  exports: [TypeOrmModule],
})
export class ProfessionalModule {}
