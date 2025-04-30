import { Injectable } from '@nestjs/common';
import { CreateCourtDetailDto } from './dto/create-court-detail.dto';
import { UpdateCourtDetailDto } from './dto/update-court-detail.dto';

@Injectable()
export class CourtDetailService {
  create(createCourtDetailDto: CreateCourtDetailDto) {
    return 'This action adds a new courtDetail';
  }

  findAll() {
    return `This action returns all courtDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courtDetail`;
  }

  update(id: number, updateCourtDetailDto: UpdateCourtDetailDto) {
    return `This action updates a #${id} courtDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} courtDetail`;
  }
}
