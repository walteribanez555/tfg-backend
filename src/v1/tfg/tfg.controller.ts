import { Controller, Get, Post, Body, Patch, Query } from '@nestjs/common';
import { TfgService } from './tfg.service';
import { CreateTfgDto } from './dto/create-tfg.dto';
import { UpdateTfgDto } from './dto/update-tfg.dto';
import { Auth } from '../auth/decorators/auth-decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';
import { ReportTfgDto } from './dto/report-tfg.dto';

@Controller('tfg')
export class TfgController {
  constructor(private readonly tfgService: TfgService) {}

  @Auth(ValidRoles.admin)
  @Post()
  create(@Body() createTfgDto: CreateTfgDto) {
    return this.tfgService.create(createTfgDto);
  }

  @Auth(ValidRoles.admin)
  @Get()
  findAll() {
    return this.tfgService.findAll();
  }

  @Get('student')
  findOne(@Query('id') id: string) {
    return this.tfgService.findOne(id);
  }

  @Auth(ValidRoles.admin)
  @Get('report')
  getReport(@Query() reportTfgDto: ReportTfgDto) {
    return this.tfgService.getReport(reportTfgDto);
  }

  @Auth(ValidRoles.admin)
  @Patch()
  update(@Body() updateTfgDto: UpdateTfgDto) {
    return this.tfgService.update(updateTfgDto);
  }
}
