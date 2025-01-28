import { AppDataSource } from "../../config/dataSource";
import { Ingredient } from "./Ingredient.entity";

class IngredientRepository{
    async getAllIngredients(){
        try{
            const ingredientRepository = AppDataSource.getRepository(Ingredient);
            const ingredients = await ingredientRepository.find();
            return { success: true, data: ingredients };
        }catch(error: any){
            return { success: false, message: error.message };
        }
    }

    async getIngredientById(id: number){
        try{
            const ingredientRepository = AppDataSource.getRepository(Ingredient);
            const ingredient = await ingredientRepository.findOne({ where: { id } });
            return { success: true, data: ingredient };
        }catch(error: any){
            return { success: false, message: error.message };
        }
    }

    async createIngredient(name: string){
        try{
            const ingredientRepository = AppDataSource.getRepository(Ingredient);

            const newIngredient = ingredientRepository.create({ name  });

            await ingredientRepository.save(newIngredient);

            return { success: true, data: newIngredient };
        }catch(error: any){
            return { success: false, message: error.message };
        }
    }

    async updateIngredient(id: number, name: string){
        try{
            const ingredientRepository = AppDataSource.getRepository(Ingredient);

            const ingredient = await ingredientRepository.findOne({ where: { id } });

            if(!ingredient){
                return { success: false, message: "Ingrediente no encontrado" };
            }

            ingredient.name = name;            

            await ingredientRepository.save(ingredient);

            return { success: true, data: ingredient };
        }catch(error: any){
            return { success: false, message: error.message };
        }
    }

    async deleteIngredient(id: number){
        try{
            const ingredientRepository = AppDataSource.getRepository(Ingredient);

            const ingredient = await ingredientRepository.findOne({ where: { id } });

            if(!ingredient){
                return { success: false, message: "Ingrediente no encontrado" };
            }

            await ingredientRepository.remove(ingredient);

            return { success: true, data: ingredient };
        }catch(error: any){
            return { success: false, message: error.message };
        }
    }
}

export default new IngredientRepository();