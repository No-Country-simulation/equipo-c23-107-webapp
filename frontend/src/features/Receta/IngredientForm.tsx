import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import ComensalesInput from "./ComensalesInput";
import TiempoInput from "./TiempoInput";
import StepComponent from "./StepComponent";
import RecipeTitle from "./RecipeTitle";
import RecipeText from "./RecipeText";
import RecipePhotoUploader from "./RecipePhotoUploader";

interface Ingredient {
  id: number;
  value: string;
  quantity: string;
}

interface StepData {
  text: string;
  image: File | null;
}

const IngredientForm: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, value: "", quantity: "" },
    { id: 2, value: "", quantity: "" },
  ]);
  const [comensales, setComensales] = useState(1);
  const [steps, setSteps] = useState<StepData[]>([
    { text: "", image: null },
    { text: "", image: null },
  ]);

  const [title, setTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  const [photo, setPhoto] = useState<File | null>(null);

  const handleTiempoChange = (value: string) => {
    console.log("Tiempo ingresado:", value);
    console.log("Foto:", photo);
  };

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: prev.length + 1, value: "", quantity: "" },
    ]);
  };

  const updateIngredientValue = (id: number, value: string) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, value } : ingredient
      )
    );
  };

  const updateIngredientQuantity = (id: number, quantity: string) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, quantity } : ingredient
      )
    );
  };

  const deleteIngredient = (id: number) => {
    setIngredients((prev) =>
      prev
        .filter((ingredient) => ingredient.id !== id)
        .map((ingredient, index) => ({ ...ingredient, id: index + 1 }))
    );
  };

  const addStep = () => {
    setSteps((prev) => [...prev, { text: "", image: null }]);
  };

  const removeStep = (index: number) => {
    setSteps((prev) => prev.filter((_, i) => i !== index));
  };

  const updateStepText = (index: number, text: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index].text = text;
    setSteps(updatedSteps);
  };

  const updateStepImage = (index: number, file: File | null) => {
    const updatedSteps = [...steps];
    updatedSteps[index].image = file;
    setSteps(updatedSteps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ingredientes:", ingredients);
    console.log("Pasos:", steps);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-cremaClaro rounded-md shadow-md"
    >
      <h2 className="text-azulOscuro text-2xl font-bold mb-4">Crear Receta</h2>
      <div className="flex justify-center">
        <div className="w-1/2">
          <RecipePhotoUploader onPhotoChange={setPhoto} />
        </div>
        <div className="w-1/2">
          <RecipeTitle value={title} onChange={setTitle} />
          <RecipeText value={recipeText} onChange={setRecipeText} />
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <div className="bg-slate-100 p-6 w-1/2">
          <h4 className="mb-4 text-gris">
            Agrega acá los ingredientes y cantidades para tu receta
          </h4>
          <ComensalesInput value={comensales} onChange={setComensales} />
          <TiempoInput onChange={handleTiempoChange} />
          {ingredients.map((ingredient) => (
            <IngredientInput
              key={ingredient.id}
              number={ingredient.id}
              value={ingredient.value}
              quantity={ingredient.quantity}
              onValueChange={(value) =>
                updateIngredientValue(ingredient.id, value)
              }
              onQuantityChange={(quantity) =>
                updateIngredientQuantity(ingredient.id, quantity)
              }
              onDelete={
                ingredients.length > 1
                  ? () => deleteIngredient(ingredient.id)
                  : undefined
              }
            />
          ))}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={addIngredient}
              className="bg-azulClaro hover:bg-celesteClaro text-white px-4 py-2 rounded"
            >
              + Agregar Ingrediente
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-slate-100 p-6">
          <h4 className="mb-4 text-gris">
            Detalla los pasos de preparación de tu receta
          </h4>
          {steps.map((step, index) => (
            <StepComponent
              key={index}
              stepNumber={index + 1}
              stepData={step}
              onTextChange={(text) => updateStepText(index, text)}
              onImageChange={(file) => updateStepImage(index, file)}
            />
          ))}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={addStep}
              className="bg-azulClaro hover:bg-celesteClaro text-white px-4 py-2 rounded"
            >
              + Agregar Paso
            </button>
            {steps.length > 1 && (
              <button
                type="button"
                onClick={() => removeStep(steps.length - 1)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Eliminar Último Paso
              </button>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-amarilloOscuro hover:bg-amarilloClaro text-white px-4 py-2 rounded mt-6"
      >
        Guardar Receta
      </button>
    </form>
  );
};

export default IngredientForm;
