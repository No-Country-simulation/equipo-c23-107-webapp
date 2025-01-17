import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Images } from "../Images/Images.entity";

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  description: string;

  @Column({ type: "varchar", length: 100 })
  @OneToOne(() => Images)
  imageURL: Images["id"];
}
