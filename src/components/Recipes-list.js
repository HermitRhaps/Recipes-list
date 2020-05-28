import React, { useState } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipe";
const RecipeList = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  function submitClick(e) {
    e.preventDefault();
    dispatch(createRecipe(e.target.value));
  }
  return (
    <div className="container">
      <h1>Hi</h1>
      <button value="f" onClick={submitClick}>
        Click
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.text,
});
export default connect(mapStateToProps, null)(RecipeList);
