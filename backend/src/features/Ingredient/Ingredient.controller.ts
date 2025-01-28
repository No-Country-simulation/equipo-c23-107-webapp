import { Request, Response } from "express";
import IngredientRepository from "./Ingredient.repository";

class IngredientController {
    async getAllIngredients(req: Request, res: Response) {
        const result = await IngredientRepository.getAllIngredients();
        res.json(result);
    }
    
    async getIngredientById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await IngredientRepository.getIngredientById(parseInt(id));
        res.json(result);
    }
    
    async createIngredient(req: Request, res: Response) {        
        if (!req.body) {
        res.status(400).json({ success: false, message: "Petición inválida" });
        return
        }
    
        const { name } = req.body;
    
        if (!name) {
        res.status(400).json({ success: false, message: "Nombre es obligatorio" });
        return
        }    
    
        const result = await IngredientRepository.createIngredient(name);
        
        if (result.success) {
        console.log("Ingrediente creado con éxito");
        res.status(201).json(result);
        } else {
        res.status(500).json(result);
        }
    }
    
    async updateIngredient(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
    
        if (!name) {
        res.status(400).json({ success: false, message: "Nombre es obligatorio" });
        return
        }
    
        const result = await IngredientRepository.updateIngredient(parseInt(id), name);
        
        if (result.success) {
        console.log("Ingrediente actualizado con éxito");
        res.json(result);
        } else {
        res.status(500).json(result);
        }
    }
    
    async deleteIngredient(req: Request, res: Response) {
        const { id } = req.params;
        const result = await IngredientRepository.deleteIngredient(parseInt(id));
    
        if (result.success) {
        console.log("Ingrediente eliminado con éxito");
        res.json(result);
        } else {
        res.status(500).json(result);
        }
    }
}

export const ingredientController = new IngredientController();