import { Court } from 'src/v1/court/entities/court.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('court_detail')
export class CourtDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: Date;

  @ManyToOne(() => Court, (court) => court.courtDetail)
  court: Court;
}
