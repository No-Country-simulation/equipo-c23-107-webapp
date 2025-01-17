import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { User } from "../User/user.entity";
import { Ingredient } from "../Ingredient/Ingredient.entity";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  @OneToOne(() => User)
  userid: User["id"];

  @Column({ type: "varchar", length: 300 })
  title: string;

  @Column({ type: "varchar", length: 500 })
  description: string;

  @Column({ type: "varchar", length: 100 })
  @OneToMany(() => Ingredient, (ingredient) => ingredient.id, { cascade: true })
  ingredient: Ingredient;

  @Column({ type: "varchar", length: 255 })
  step: string;
}
