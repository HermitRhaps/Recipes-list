import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../../redux/actions/createRecipe";
import "../../../styles/modal.scss";
import { TextField } from "@material-ui/core";

const Create = ({ dispatch, state, status }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (
      title.trim() &&
      image.trim() &&
      recipeGroup.trim() &&
      description.trim()
    ) {
      dispatch(createRecipe(title, image, recipeGroup, description));
    }
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
        <input
          type="file"
          name="file"
          id="file"
          className="inputFile"
          onChange={(e) => submitImage(e)}
          accept="image/*"
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
        <button type="submit" className="modal_button">
          Create recipe
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Create);
