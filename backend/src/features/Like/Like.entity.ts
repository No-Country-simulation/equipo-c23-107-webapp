import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../User/user.entity";
import { Recipe } from "../Recipe/Recipe.entity";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Recipe, (recipe) => recipe.likes, { nullable: false })
  @JoinColumn()
  recipe: Recipe;
}
