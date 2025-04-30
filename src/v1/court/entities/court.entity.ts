import { CourtDetail } from 'src/v1/court-detail/entities/court-detail.entity';
import { Defense } from 'src/v1/defense/entities/defense.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('court')
export class Court {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @OneToOne(() => Defense, (defense) => defense.court)
  defense: Defense;

  @OneToMany(() => CourtDetail, (courtDetail) => courtDetail.court)
  courtDetail: CourtDetail;
}
