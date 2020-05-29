import React, { useState } from "react";
import CreateForm from "./CreateRecipeForm";
import RecipeList from "./Recipes-list";
import "../styles/initial.scss";
export const Initial = ({ state }) => {
  const [createModal, setCreateModal] = useState(false);
  function showCreateModal(e) {
    setCreateModal(true);
    // window.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   e.target.getAttribute("data-do") === "createModal"
    //     ? setCreateModal(true)
    //     : setCreateModal(false);
    // });
  }
  return (
    <div className="container">
      <button data-do="createModal" onClick={showCreateModal}>
        Create
      </button>
      {createModal ? <CreateForm /> : null}
      <RecipeList />
    </div>
  );
};
