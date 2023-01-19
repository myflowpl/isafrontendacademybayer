import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Burger {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredients: string

  @Column()
  name: string;

  @Column({type: 'numeric'})
  price: number;

  @Column()
  url: string;
} 