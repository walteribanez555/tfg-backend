import { Professional } from 'src/v1/professional/entities/professional.entity';
import { Scholastic } from 'src/v1/scholastic/entities/scholastic.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('collaborator')
export class Collaborator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @OneToOne(() => Professional, (professional) => professional.collaborator, {
    nullable: true,
  })
  professional: Professional;

  @OneToOne(() => Scholastic, (scholastic) => scholastic.collaborator, {
    nullable: true,
  })
  scholastic: Scholastic;
}
