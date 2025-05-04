import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class ReportTfgDto {
  @IsOptional()
  @IsUUID()
  mode?: string;

  @IsOptional()
  @Type(() => Date) // Transform the input to a Date instance
  @IsDate()
  init?: Date;

  @IsOptional()
  @Type(() => Date) // Transform the input to a Date instance
  @IsDate()
  end?: Date;

  @IsOptional()
  @IsString()
  state?: string;
}
