import { Injectable } from '@nestjs/common';
import { CreateRevisionStepDto } from './dto/create-revision-step.dto';
import { UpdateRevisionStepDto } from './dto/update-revision-step.dto';

@Injectable()
export class RevisionStepService {
  create(createRevisionStepDto: CreateRevisionStepDto) {
    return 'This action adds a new revisionStep';
  }

  findAll() {
    return `This action returns all revisionStep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revisionStep`;
  }

  update(id: number, updateRevisionStepDto: UpdateRevisionStepDto) {
    return `This action updates a #${id} revisionStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} revisionStep`;
  }
}
