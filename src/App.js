import React from "react";
import RecipeList from "./components/Recipes-list";
import CreateRecipeForm from "./components/CreateRecipeForm";
export const App = () => {
  return (
    <div>
      <CreateRecipeForm />
      <RecipeList />
    </div>
  );
};
