import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { editRecipe } from "../../../redux/actions/editRecipe";
import "../../../styles/modal.scss";
import { TextField } from "@material-ui/core";
const Edit = ({ state, dispatch, id, status }) => {
  const [newTitle, setTitle] = useState(state.recipes[id].text);
  const [newImage, setImage] = useState(state.recipes[id].image);
  const [newRecipeGroup, setRecipeGroup] = useState(state.recipes[id].group);
  const [newDescription, setDescription] = useState(
    state.recipes[id].description
  );
  function submitForm(e) {
    e.preventDefault();
    dispatch(
      editRecipe(id, newTitle, newImage, newRecipeGroup, newDescription)
    );
    status(false);
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
    <Fragment>
      <form onSubmit={submitForm} className="modal_form">
        <TextField
          id="outlined-basic"
          label="Recipe title"
          variant="outlined"
          className="titleInput"
          value={newTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {!newImage ? (
          <label htmlFor="file" className="inputFileLabel" variant="outlined">
            Choose a image
          </label>
        ) : (
          <label htmlFor="file" className="inputFileLabel" variant="outlined">
            Change image: {newImage}
          </label>
        )}
        <input
          type="file"
          name="file"
          id="file"
          className="inputFile"
          onChange={(e) => submitImage(e)}
          accept="image/*"
        />
        <select
          className="inputSelect"
          onChange={(e) => setRecipeGroup(e.target.value)}
        >
          {state.categories.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
        <TextField
          label="Please enter new recipe description"
          multiline
          variant="outlined"
          value={newDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="submitCreate">
          Edit recipe
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Edit);
