import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Images } from "../Images/Images.entity";  // Asegúrate de importar la entidad Images

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, unique: true })
  uid: string;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column({ type: "text" })
  token: string;
 
  @ManyToOne(() => Images, { nullable: true })
  @JoinColumn()
  profileImage: Images;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}