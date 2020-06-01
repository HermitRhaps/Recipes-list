import React, { useState } from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import RecipeList from "./Recipes-list";
import { Navigation } from "./Navigation";
export const Main = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div>
      <Navigation />
      {modalStatus ? <CreateRecipeForm /> : null}
      <RecipeList />
    </div>
  );
};
