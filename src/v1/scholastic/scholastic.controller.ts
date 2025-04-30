import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScholasticService } from './scholastic.service';
import { CreateScholasticDto } from './dto/create-scholastic.dto';
import { UpdateScholasticDto } from './dto/update-scholastic.dto';

@Controller('scholastic')
export class ScholasticController {
  constructor(private readonly scholasticService: ScholasticService) {}

  @Post()
  create(@Body() createScholasticDto: CreateScholasticDto) {
    return this.scholasticService.create(createScholasticDto);
  }

  @Get()
  findAll() {
    return this.scholasticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scholasticService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScholasticDto: UpdateScholasticDto) {
    return this.scholasticService.update(+id, updateScholasticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scholasticService.remove(+id);
  }
}
