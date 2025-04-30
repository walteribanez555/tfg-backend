import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('revision_step')
export class RevisionStep {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  step: number;

  @Column('text')
  status: string;
  //   @ManyToOne
}
