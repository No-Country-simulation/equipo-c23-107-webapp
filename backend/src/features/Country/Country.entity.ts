import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, unique: true })
  country: string;
}
