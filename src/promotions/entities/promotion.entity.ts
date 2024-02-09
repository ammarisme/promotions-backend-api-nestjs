
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Promotion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int'})
  promotion_id: number;

  @Column({ type: 'varchar' })
  banner_url: string;
}

