import { Injectable } from '@nestjs/common';
import { CreateReviewerDto } from './dto/create-reviewer.dto';
import { UpdateReviewerDto } from './dto/update-reviewer.dto';

@Injectable()
export class ReviewerService {
  create(createReviewerDto: CreateReviewerDto) {
    return 'This action adds a new reviewer';
  }

  findAll() {
    return `This action returns all reviewer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reviewer`;
  }

  update(id: number, updateReviewerDto: UpdateReviewerDto) {
    return `This action updates a #${id} reviewer`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewer`;
  }
}
