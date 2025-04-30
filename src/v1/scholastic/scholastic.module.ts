import { Module } from '@nestjs/common';
import { ScholasticService } from './scholastic.service';
import { ScholasticController } from './scholastic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scholastic } from './entities/scholastic.entity';

@Module({
  controllers: [ScholasticController],
  providers: [ScholasticService],
  imports: [TypeOrmModule.forFeature([Scholastic])],
  exports: [TypeOrmModule],
})
export class ScholasticModule {}
