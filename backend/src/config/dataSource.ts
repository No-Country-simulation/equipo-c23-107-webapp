import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource = new DataSource({
  //type: "mysql",
  type: "postgres",
  url: process.env.SUPABASE_URL,
  //port: process.env.SUPABASE_PORT
  //  ? parseInt(process.env.SUPABASE_PORT, 10)
  //  : 6543,
  // username: process.env.SUPABASE_USER,
  // password: process.env.SUPABASE_PASSWORD,
  //database: process.env.SUPABASE_DB,
  entities: ["src/features/*/*.entity.ts"],
  //migrations: ["src/migrations/*.ts"],
  logging: false,
  synchronize: true,
});
