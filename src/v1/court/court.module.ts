import { Module } from '@nestjs/common';
import { CourtService } from './court.service';
import { CourtController } from './court.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Court } from './entities/court.entity';

@Module({
  controllers: [CourtController],
  providers: [CourtService],
  imports: [TypeOrmModule.forFeature([Court])],
  exports: [TypeOrmModule],
})
export class CourtModule {}
