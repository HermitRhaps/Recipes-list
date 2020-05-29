import React, { useState } from "react";
import "../styles/recipe.scss";
import EditRecipeForm from "./EditRecipeForm";
export const Recipe = (props, { edit }) => {
  const [editRecipeModal, setEditRecupeModal] = useState(false);
  const [editIndex, setIndex] = useState();
  return (
    <div className="container">
      <h1>{props.state.text}</h1>
      <h2>{props.state.group}</h2>
      {editRecipeModal ? <EditRecipeForm id={editIndex} /> : null}
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <img src={props.state.image} alt="" />
        <textarea value={props.state.description} disabled />
        <button
          value={props.index}
          onClick={(e) => setEditRecupeModal(true) || setIndex(e.target.value)}
        >
          Re
        </button>
      </form>
    </div>
  );
};
