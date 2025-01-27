import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "../User/user.entity";
import { Ingredient } from "../Ingredient/Ingredient.entity";
import { Step } from "../Step/Step.entity";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;

  @Column()
  title: string;

  @Column("text")
  description: string;

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];

  @OneToMany(() => Step, (step) => step.recipes)
  steps: Step[];
}
