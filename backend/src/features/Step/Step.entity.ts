import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from "typeorm";
import { Images } from "../Images/Images.entity";
import { Recipe } from "../Recipe/Ricipe.entity";

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.steps)
  recipes: Recipe;

  @Column({ type: "varchar", length: 100 })
  description: string;

  @Column({ type: "varchar", length: 100 })
  @OneToOne(() => Images)
  imageURL: Images["id"];
}
