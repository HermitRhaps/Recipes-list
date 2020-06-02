import React, { useState } from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import RecipeList from "./Recipes-list";
import { Navigation } from "./Navigation";
import { Button } from "@material-ui/core";
export const Main = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div>
      {!modalStatus ? (
        <Button
          onClick={() => setModalStatus(true)}
          variant="outlined"
          color="primary"
        >
          Open modal to create recipe
        </Button>
      ) : (
        <Button variant="outlined" disabled>
          Current modal is active
        </Button>
      )}
      {modalStatus ? <CreateRecipeForm isOpen={setModalStatus} /> : null}
      <Navigation />
      <RecipeList />
    </div>
  );
};
