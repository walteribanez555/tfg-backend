/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateTfgDto } from './dto/create-tfg.dto';
import { DataSource } from 'typeorm';
import { UpdateTfgDto } from './dto/update-tfg.dto';
import { ReportTfgDto } from './dto/report-tfg.dto';

@Injectable()
export class TfgService {
  logger = new Logger();

  constructor(private readonly dataSource: DataSource) {}

  async create(createTfgDto: CreateTfgDto) {
    const { title, date, studentId, tutorId, mode } = createTfgDto;

    const query = `
      SELECT public.fn_insert_tfg($1, $2, $3, $4, $5, $6) AS id;
    `;

    const result = await this.dataSource.query(query, [
      title,
      date.toISOString().split('T')[0], // Format date to YYYY-MM-DD
      'Pending', // Default state value
      studentId,
      tutorId,
      mode,
    ]);
    return { id: result[0].id }; // Return the newly created TFG ID
  }

  async findAll() {
    const query = `SELECT * FROM vw_tfgs_with_tutors`;
    const result = await this.dataSource.query(query);
    return result;
  }

  async findOne(studentUuid: string) {
    const query = `SELECT * FROM public.fn_get_tfgs_by_student_uuid($1)`;
    const result = await this.dataSource.query(query, [studentUuid]);
    return result;
  }

  async update(updateTfgDto: UpdateTfgDto) {
    const { id, title, date, state, studentId, tutorId, mode } = updateTfgDto;

    const query = `
      SELECT public.fn_update_tfg($1, $2, $3, $4, $5, $6, $7) AS id;
    `;

    const result = await this.dataSource.query(query, [
      id,
      title,
      date!.toISOString().split('T')[0],
      state ?? 'Pending',
      studentId,
      tutorId,
      mode,
    ]);

    console.log(result);

    if (!result[0]?.id) {
      throw new NotFoundException(`TFG with id ${id} not found`);
    }

    return { id: result[0].id }; // Return the updated TFG ID
  }

  async getReport(reportTfgDto: ReportTfgDto) {
    const { mode, init, end, state } = reportTfgDto;

    const query = `
      SELECT * FROM vw_tfgs_with_tutors 
      WHERE 
        ($1::uuid IS NULL OR mode_id = $1::uuid) AND 
        ($2::date IS NULL OR date::date >= $2::date) AND 
        ($3::date IS NULL OR date::date <= $3::date) AND 
        ($4::text IS NULL OR state = $4::text)
    `;

    const result = await this.dataSource.query(query, [
      mode ?? null,
      init ? init.toISOString().split('T')[0] : null,
      end ? end.toISOString().split('T')[0] : null,
      state ?? null,
    ]);

    return result;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') {
      throw new InternalServerErrorException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
