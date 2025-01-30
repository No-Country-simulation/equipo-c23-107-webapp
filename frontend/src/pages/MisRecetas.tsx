import React, { useEffect, useState } from "react";
import RecipeCard from "./../features/Receta/RecipeCard";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Mis Recetas</h1>
          <Link
            to="/create-recipe"
            className="bg-azulClaro flex items-center rounded-lg p-3 mb-3 text-gray-700 hover:bg-amarilloOscuro"
          >
            Añadir Nueva Receta{" "}
          </Link>
        </div>

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
