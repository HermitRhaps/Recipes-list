import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipe";
const RecipeList = ({ dispatch }) => {
  function submitClick(e) {
    e.preventDefault();
    dispatch(createRecipe(e.target.value));
  }
  return (
    <div className="App">
      <h1>Hi</h1>
      <button value="f" onClick={submitClick}>
        Click
      </button>
    </div>
  );
};

export default connect()(RecipeList);
