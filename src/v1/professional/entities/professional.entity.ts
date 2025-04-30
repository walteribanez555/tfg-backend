import { Collaborator } from 'src/v1/collaborator/entities/collaborator.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professional')
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  specialty: string;

  @OneToOne(() => Collaborator, (collaborator) => collaborator.professional)
  collaborator: Collaborator;
}
