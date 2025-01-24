import express from "express";
import imagesRouter from "./features/Images/Images.routes";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
.then(() => {
  console.log("Database connected");
})
.catch((error) => {
  console.error("Error connecting to database", error);
});

export const app = express();

// Analizar solicitudes con datos JSON en el cuerpo
app.use(express.json())

// Analizar solicitudes con datos de formulario en el cuerpo
app.use(express.urlencoded({ extended: false }))

app.use(
  '/api/v1',
  imagesRouter
 )

export const server = () => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};
