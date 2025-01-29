import React, { useEffect, useState } from "react";
import RecipeCard from "./../features/Receta/RecipeCard";
import Layout from "../layouts/Layout";

interface Recipe {
  title: string;
  recipeText: string;
  image: string;
  tags: string[];
}

const MisRecetas: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]); // Estado con recetas

  useEffect(() => {
    fetch("../../src/data.json") // Si está en public/data.json
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Mis Recetas</h1>
        <div className="grid grid-cols-1 gap-6">
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          ) : (
            <p>Cargando recetas...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MisRecetas;
