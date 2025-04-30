import { Tfg } from 'src/v1/tfg/entities/tfg.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  carrer: string;

  @Column('text')
  tuition: string;

  @OneToMany(() => Tfg, (tfg) => tfg.student)
  tfg: Tfg;
}
