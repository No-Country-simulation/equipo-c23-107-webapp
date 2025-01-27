import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
