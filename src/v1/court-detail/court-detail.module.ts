import { Module } from '@nestjs/common';
import { CourtDetailService } from './court-detail.service';
import { CourtDetailController } from './court-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtDetail } from './entities/court-detail.entity';

@Module({
  controllers: [CourtDetailController],
  providers: [CourtDetailService],
  imports: [TypeOrmModule.forFeature([CourtDetail])],
  exports: [TypeOrmModule],
})
export class CourtDetailModule {}
