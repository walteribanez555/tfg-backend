import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModeService } from './mode.service';
import { CreateModeDto } from './dto/create-mode.dto';
import { UpdateModeDto } from './dto/update-mode.dto';

@Controller('mode')
export class ModeController {
  constructor(private readonly modeService: ModeService) {}

  @Post()
  create(@Body() createModeDto: CreateModeDto) {
    return this.modeService.create(createModeDto);
  }

  @Get()
  findAll() {
    return this.modeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeDto: UpdateModeDto) {
    return this.modeService.update(+id, updateModeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeService.remove(+id);
  }
}
