import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IceType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  value: string;

  @Column('text', { unique: true })
  name_spanish: string;

  @Column('text', { unique: true })
  name_english: string;

  @Column('varchar', { length: 255, unique: true })
  description_spanish: string;

  @Column('varchar', { length: 255, unique: true })
  description_english: string;

  @Column('text', { array: true, unique: true })
  examples_cocktails: string[];
}
