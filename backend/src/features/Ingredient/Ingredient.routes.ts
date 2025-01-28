import { Router } from "express";
import { ingredientController } from "./Ingredient.controller";

const ingredientRouter = Router();

ingredientRouter.get("/ingredients", ingredientController.getAllIngredients);
ingredientRouter.get("/ingredients/:id", ingredientController.getIngredientById);
ingredientRouter.post("/ingredients", ingredientController.createIngredient);
ingredientRouter.put("/ingredients/:id", ingredientController.updateIngredient);
ingredientRouter.delete("/ingredients/:id", ingredientController.deleteIngredient);

export default ingredientRouter;
