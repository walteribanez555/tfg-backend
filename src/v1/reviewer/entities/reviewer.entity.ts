import { Scholastic } from 'src/v1/scholastic/entities/scholastic.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reviewer')
export class Reviewer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  observation: string;

  @Column('date')
  date: Date;

  @OneToOne(() => Scholastic, (scholastic) => scholastic.reviewer)
  scholastic: Scholastic;
}
