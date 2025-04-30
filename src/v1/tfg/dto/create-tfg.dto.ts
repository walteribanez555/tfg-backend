import { Type } from 'class-transformer';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class CreateTfgDto {
  @IsString()
  title: string;

  @Type(() => Date) // Transform the input to a Date instance
  @IsDate()
  date: Date;

  @IsUUID()
  studentId: string;

  @IsUUID()
  tutorId: string;
}
