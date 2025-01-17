import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;
}
