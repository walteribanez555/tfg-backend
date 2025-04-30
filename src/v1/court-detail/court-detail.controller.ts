import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourtDetailService } from './court-detail.service';
import { CreateCourtDetailDto } from './dto/create-court-detail.dto';
import { UpdateCourtDetailDto } from './dto/update-court-detail.dto';

@Controller('court-detail')
export class CourtDetailController {
  constructor(private readonly courtDetailService: CourtDetailService) {}

  @Post()
  create(@Body() createCourtDetailDto: CreateCourtDetailDto) {
    return this.courtDetailService.create(createCourtDetailDto);
  }

  @Get()
  findAll() {
    return this.courtDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courtDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourtDetailDto: UpdateCourtDetailDto) {
    return this.courtDetailService.update(+id, updateCourtDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courtDetailService.remove(+id);
  }
}
