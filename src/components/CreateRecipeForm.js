import React, { useState } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipe";
import "../styles/createRecipeForm.scss";
import { TextField, Button } from "@material-ui/core";

const CreateRecipeForm = ({ dispatch, state, isOpen }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (
      !title.trim() &&
      !image.trim() &&
      !recipeGroup.trim() &&
      !description.trim()
    ) {
      setTitle("") && setImage("") && setRecipeGroup("") && setDescription("");
    }
  }
  function submitClick(e) {
    if (
      title.trim() &&
      image.trim() &&
      recipeGroup.trim() &&
      description.trim()
    ) {
      dispatch(createRecipe(title, image, recipeGroup, description));
    }
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
    <div className="modal_container">
      <div className="modal_header">
        <h2 className="modal_title">Create form</h2>
        <Button className="modal_close" onClick={() => isOpen(false)}>
          Close
        </Button>
      </div>
      <form
        onSubmit={submitForm}
        className="modal_form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Recipe title"
          variant="outlined"
          className="titleInput"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          type="file"
          name="file"
          id="file"
          className="inputFile"
          onChange={(e) => submitImage(e)}
        />
        {!image ? (
          <label htmlFor="file" className="inputFileLabel" variant="outlined">
            Choose a image
          </label>
        ) : (
          <label htmlFor="file" className="inputFileLabel" variant="outlined">
            Change image: {image}
          </label>
        )}
        <select
          className="inputSelect"
          onChange={(e) => setRecipeGroup(e.target.value)}
        >
          <option defaultValue disabled>
            Select category
          </option>
          {state.categories.map((group, index) => (
            <option key={index} value={group} className="inputOption">
              {group}
            </option>
          ))}
        </select>

        <TextField
          label="Please enter recipe description"
          multiline
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={submitClick} className="submitCreate">
          Create recipe
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(CreateRecipeForm);
