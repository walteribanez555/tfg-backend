import { PartialType } from '@nestjs/mapped-types';
import { CreateRevisionStepDto } from './create-revision-step.dto';

export class UpdateRevisionStepDto extends PartialType(CreateRevisionStepDto) {}
