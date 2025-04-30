import { Injectable } from '@nestjs/common';
import { CreateScholasticDto } from './dto/create-scholastic.dto';
import { UpdateScholasticDto } from './dto/update-scholastic.dto';

@Injectable()
export class ScholasticService {
  create(createScholasticDto: CreateScholasticDto) {
    return 'This action adds a new scholastic';
  }

  findAll() {
    return `This action returns all scholastic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scholastic`;
  }

  update(id: number, updateScholasticDto: UpdateScholasticDto) {
    return `This action updates a #${id} scholastic`;
  }

  remove(id: number) {
    return `This action removes a #${id} scholastic`;
  }
}
