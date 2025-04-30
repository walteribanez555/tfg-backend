import { Module } from '@nestjs/common';
import { ReviewerService } from './reviewer.service';
import { ReviewerController } from './reviewer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviewer } from './entities/reviewer.entity';

@Module({
  controllers: [ReviewerController],
  providers: [ReviewerService],
  imports: [TypeOrmModule.forFeature([Reviewer])],
  exports: [TypeOrmModule],
})
export class ReviewerModule {}
