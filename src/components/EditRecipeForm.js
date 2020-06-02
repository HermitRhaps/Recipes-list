import React, { useState } from "react";
import { connect } from "react-redux";
import { editRecipe } from "../redux/actions/editRecipe";

import Paper from "@material-ui/core/Paper";
const EditRecipeForm = ({ state, dispatch, id }) => {
  const [newTitle, setTitle] = useState(state.recipes[id].text);
  const [newImage, setImage] = useState("");
  const [newRecipeGroup, setRecipeGroup] = useState(state.recipes[id].group);
  const [newDescription, setDescription] = useState(
    state.recipes[id].description
  );
  function submitForm(e) {
    e.preventDefault();
  }
  function submitClick(e) {
    dispatch(
      editRecipe(id, newTitle, newImage, newRecipeGroup, newDescription)
    );
    console.log(state);
  }
  function submitImage(e) {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
  }
  return (
    <div>
      <Paper elevation={0}>
        <h2>Edit</h2>
        <form onSubmit={submitForm} className="form">
          <input
            value={newTitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input type="file" onChange={(e) => submitImage(e)} />
          <select onChange={(e) => setRecipeGroup(e.target.value)}>
            {state.categories.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
          <textarea
            value={newDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" onClick={submitClick}>
            Click
          </button>
        </form>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(EditRecipeForm);
