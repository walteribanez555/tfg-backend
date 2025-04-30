import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewerService } from './reviewer.service';
import { CreateReviewerDto } from './dto/create-reviewer.dto';
import { UpdateReviewerDto } from './dto/update-reviewer.dto';

@Controller('reviewer')
export class ReviewerController {
  constructor(private readonly reviewerService: ReviewerService) {}

  @Post()
  create(@Body() createReviewerDto: CreateReviewerDto) {
    return this.reviewerService.create(createReviewerDto);
  }

  @Get()
  findAll() {
    return this.reviewerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewerDto: UpdateReviewerDto) {
    return this.reviewerService.update(+id, updateReviewerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewerService.remove(+id);
  }
}
