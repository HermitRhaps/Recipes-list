import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../../redux/actions/createRecipe";
import { editRecipe } from "../../../redux/actions/editRecipe";
import "../../../styles/modal.scss";
import Default from "../../../styles/default/default_image.jpg";
import { TextField } from "@material-ui/core";

const CreateOrEdit = ({ dispatch, id, state, status }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (id) {
      setTitle(state.recipes[id].text);
      setImage(state.recipes[id].image);
      setRecipeGroup(state.recipes[id].group);
      setDescription(state.recipes[id].description);
    }
  }, []);

  function submitForm(e) {
    e.preventDefault();
    if (id) {
      dispatch(editRecipe(id, title, image, recipeGroup, description));
    } else {
      if (title.trim() && recipeGroup.trim() && description.trim()) {
        dispatch(createRecipe(title, image, recipeGroup, description));
      }
    }
    status(false);
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  function submitImage(e) {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
  }
  const handleGroupChange = (e) => {
    setRecipeGroup(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
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
          data-mydatafield="asdasdasdaad"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="file"
          name="file"
          id="file"
          className="inputFile"
          onChange={submitImage}
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
          defaultValue={id ? recipeGroup : "Select recipe category"}
          onChange={handleGroupChange}
        >
          <option defaultValue disabled>
            {id ? recipeGroup : "Select recipe category"}
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
          onChange={handleDescriptionChange}
        />
        {id ? (
          <button type="submit" className="modal_button">
            Edit recipe
          </button>
        ) : (
          <button type="submit" className="modal_button">
            Create recipe
          </button>
        )}
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(CreateOrEdit);
