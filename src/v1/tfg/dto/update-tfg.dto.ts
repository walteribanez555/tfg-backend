import { PartialType } from '@nestjs/mapped-types';
import { CreateTfgDto } from './create-tfg.dto';

export class UpdateTfgDto extends PartialType(CreateTfgDto) {}
