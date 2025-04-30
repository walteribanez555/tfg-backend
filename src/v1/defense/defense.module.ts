import { Module } from '@nestjs/common';
import { DefenseService } from './defense.service';
import { DefenseController } from './defense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Defense } from './entities/defense.entity';

@Module({
  controllers: [DefenseController],
  providers: [DefenseService],
  imports: [TypeOrmModule.forFeature([Defense])],
  exports: [TypeOrmModule],
})
export class DefenseModule {}
