import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  URL: string;

  @Column({ type: "varchar", length: 100 })
  title: string;
}
