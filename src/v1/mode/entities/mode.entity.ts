import { Tfg } from 'src/v1/tfg/entities/tfg.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mode')
export class Mode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => Tfg, (tfg) => tfg.mode)
  tfg: Tfg;
}
