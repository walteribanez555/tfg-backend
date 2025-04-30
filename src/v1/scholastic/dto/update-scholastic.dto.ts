import { PartialType } from '@nestjs/mapped-types';
import { CreateScholasticDto } from './create-scholastic.dto';

export class UpdateScholasticDto extends PartialType(CreateScholasticDto) {}
