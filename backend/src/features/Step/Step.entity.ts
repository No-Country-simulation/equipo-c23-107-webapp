import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
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

  @Column({ type: "varchar", length: 100 })
  description: string;

  @OneToOne(() => Images)
  @JoinColumn()
  imageURL: Images;
}