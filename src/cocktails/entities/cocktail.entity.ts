import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cocktails' })
export class Cocktail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @Column('text')
  distilled: string;

  @Column('text')
  iceType: string;

  @Column('text')
  garnish: string;

  @Column('text')
  glass: string;

  @Column('text')
  mixingMethod: string;

  @Column('json', { nullable: true })
  ingredients: {
    id: string;
    name: string;
  }[];

  @Column('json', { nullable: true })
  instructions: {
    id: string;
    name: string;
  }[];

  @Column('varchar', { nullable: true })
  image: string;
}
