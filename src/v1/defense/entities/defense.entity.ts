import { Court } from 'src/v1/court/entities/court.entity';
import { Tfg } from 'src/v1/tfg/entities/tfg.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('defense')
export class Defense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: Date;

  @Column('text')
  type: string;

  @ManyToOne(() => Tfg, (tfg) => tfg.defense)
  tfg: Tfg;

  @OneToOne(() => Court, (court) => court.defense)
  court: Court;
}
