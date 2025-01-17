import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export const server = () => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};
