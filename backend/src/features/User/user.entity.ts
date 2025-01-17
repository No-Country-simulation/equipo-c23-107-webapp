import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  uid: string;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100 })
  token: string;

  @Column({ type: "varchar", length: 100 })
  profileImage: string;

  @Column({ type: "varchar", length: 255 })
  createdAt: string;
}
