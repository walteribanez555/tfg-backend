import { Defense } from 'src/v1/defense/entities/defense.entity';
import { Mode } from 'src/v1/mode/entities/mode.entity';
import { Scholastic } from 'src/v1/scholastic/entities/scholastic.entity';
import { Student } from 'src/v1/student/entities/student.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tfg')
export class Tfg {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  date: string;

  @Column('text')
  state: string;

  @ManyToOne(() => Student, (student) => student.tfg)
  student: Student;

  @OneToMany(() => Mode, (mode) => mode.tfg)
  mode: Mode;

  @OneToMany(() => Defense, (defense) => defense.tfg)
  defense: Defense;

  @ManyToOne(() => Scholastic, (scholastic) => scholastic.tfg)
  tutor: Scholastic;
}
