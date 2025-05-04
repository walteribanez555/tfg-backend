import { PartialType } from '@nestjs/mapped-types';
import { CreateTfgDto } from './create-tfg.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTfgDto extends PartialType(CreateTfgDto) {
  @IsOptional()
  @IsUUID()
  id?: string; // Optional field for ID

  @IsOptional()
  @IsString()
  state?: string; // Optional field for state
}
