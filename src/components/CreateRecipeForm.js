import React, { useState } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipe";
import "../styles/createRecipeForm.scss";
const CreateRecipeForm = ({ dispatch, state }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  function submitForm(e) {
    e.preventDefault();
  }
  function submitClick(e) {
    if (title.trim()) {
      dispatch(createRecipe(title));
      console.log(state);
    }
  }
  return (
    <div className="App">
      {state.map((item, index) => (
        <h1 key={index}>{item.text}</h1>
      ))}
      <form onSubmit={submitForm}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" onClick={submitClick}>
          Click
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(CreateRecipeForm);
