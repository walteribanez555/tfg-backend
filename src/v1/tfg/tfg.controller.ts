import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { TfgService } from './tfg.service';
import { CreateTfgDto } from './dto/create-tfg.dto';
// import { UpdateTfgDto } from './dto/update-tfg.dto';

@Controller('tfg')
export class TfgController {
  constructor(private readonly tfgService: TfgService) {}

  @Post()
  create(@Body() createTfgDto: CreateTfgDto) {
    return this.tfgService.create(createTfgDto);
  }

  @Get()
  findAll() {
    return this.tfgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tfgService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTfgDto: UpdateTfgDto) {
  //   return this.tfgService.update(+id, updateTfgDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tfgService.remove(+id);
  // }
}
