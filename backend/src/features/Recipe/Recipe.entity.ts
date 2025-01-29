import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../User/user.entity";
import { Ingredient } from "../Ingredient/Ingredient.entity";
import { Step } from "../Step/Step.entity";
import { Images } from "../Images/Images.entity";
import { Tag } from "../Tag/Tag.entity";
import { Country } from "../Country/Country.entity";
import { Like } from "../Like/Like.entity";

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

  @OneToOne(() => Images)
  @JoinColumn()
  imageURL: Images;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @ManyToOne(() => Country, { nullable: true })
  @JoinColumn()
  country: Country;

  @OneToMany(() => Like, (like) => like.recipe)
  likes: Like[];
}
