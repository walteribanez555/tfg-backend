import { Collaborator } from 'src/v1/collaborator/entities/collaborator.entity';
import { Reviewer } from 'src/v1/reviewer/entities/reviewer.entity';
import { Tfg } from 'src/v1/tfg/entities/tfg.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('scholastic')
export class Scholastic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  department: string;

  @OneToOne(() => Collaborator, (collaborator) => collaborator.scholastic)
  collaborator: Collaborator;

  @OneToOne(() => Reviewer, (reviewer) => reviewer.scholastic)
  reviewer: Reviewer;

  @OneToMany(() => Tfg, (tfg) => tfg.tutor)
  tfg: Tfg;
}
