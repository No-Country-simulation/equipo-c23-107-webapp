import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Images } from "../Images/Images.entity";
import { Recipe } from "../Recipe/Recipe.entity";

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.steps)
  recipes: Recipe;

  @Column({ type: "varchar", length: 255 })
  description: string;

  @ManyToOne(() => Image, { nullable: true })
  @JoinColumn()
  image?: Images;
}