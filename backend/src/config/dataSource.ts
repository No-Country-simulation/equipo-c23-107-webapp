import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test_user",
  password: "test_pass",
  database: "test_db",
  entities: ["src/**/*.entity.ts"],
  logging: true,
  synchronize: true,
});
