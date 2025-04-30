import { Module } from '@nestjs/common';
import { ModeService } from './mode.service';
import { ModeController } from './mode.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mode } from './entities/mode.entity';

@Module({
  controllers: [ModeController],
  providers: [ModeService],
  imports: [TypeOrmModule.forFeature([Mode])],
  exports: [TypeOrmModule],
})
export class ModeModule {}
