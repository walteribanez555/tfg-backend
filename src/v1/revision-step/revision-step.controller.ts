import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevisionStepService } from './revision-step.service';
import { CreateRevisionStepDto } from './dto/create-revision-step.dto';
import { UpdateRevisionStepDto } from './dto/update-revision-step.dto';

@Controller('revision-step')
export class RevisionStepController {
  constructor(private readonly revisionStepService: RevisionStepService) {}

  @Post()
  create(@Body() createRevisionStepDto: CreateRevisionStepDto) {
    return this.revisionStepService.create(createRevisionStepDto);
  }

  @Get()
  findAll() {
    return this.revisionStepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revisionStepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevisionStepDto: UpdateRevisionStepDto) {
    return this.revisionStepService.update(+id, updateRevisionStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revisionStepService.remove(+id);
  }
}
