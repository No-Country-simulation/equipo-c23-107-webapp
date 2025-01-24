import express from "express";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
.then(() => {
  console.log("Database connected");
})
.catch((error) => {
  console.error("Error connecting to database", error);
});

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export const server = () => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};
