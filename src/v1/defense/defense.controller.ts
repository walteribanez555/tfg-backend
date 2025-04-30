import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefenseService } from './defense.service';
import { CreateDefenseDto } from './dto/create-defense.dto';
import { UpdateDefenseDto } from './dto/update-defense.dto';

@Controller('defense')
export class DefenseController {
  constructor(private readonly defenseService: DefenseService) {}

  @Post()
  create(@Body() createDefenseDto: CreateDefenseDto) {
    return this.defenseService.create(createDefenseDto);
  }

  @Get()
  findAll() {
    return this.defenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefenseDto: UpdateDefenseDto) {
    return this.defenseService.update(+id, updateDefenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defenseService.remove(+id);
  }
}
