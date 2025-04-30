import { PartialType } from '@nestjs/mapped-types';
import { CreateCourtDetailDto } from './create-court-detail.dto';

export class UpdateCourtDetailDto extends PartialType(CreateCourtDetailDto) {}
