import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

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

  @Column({ type: "varchar", length: 255, nullable: true })
  profileImage: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}