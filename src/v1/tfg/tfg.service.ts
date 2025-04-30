/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateTfgDto } from './dto/create-tfg.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class TfgService {
  constructor(private readonly dataSource: DataSource) {}

  async create(createTfgDto: CreateTfgDto) {
    const { title, date, studentId, tutorId } = createTfgDto;

    const query = `
      SELECT public.fn_insert_tfg($1, $2, $3, $4, $5) AS id;
    `;

    const result = await this.dataSource.query(query, [
      title,
      date,
      'Pending', // Default state value
      studentId,
      tutorId,
    ]);

    console.log(result);
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

  // update(id: number, updateTfgDto: UpdateTfgDto) {
  //   return `This action updates a #${id} tfg`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tfg`;
  // }
}
