import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../../redux/actions/createRecipe";
import { editRecipe } from "../../../redux/actions/editRecipe";
import "../../../styles/modal.scss";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  textarea: {
    overflowY: "scroll",
    maxHeight: 200,
    marginTop: 2,
    fontSize: "1.05rem",
  },
  error: {
    border: "2px solid red",
    borderRadius: "5%",
  },
});
const CreateOrEdit = ({ dispatch, id, state, status, item }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");
  const [noError, setError] = useState(true);
  useEffect(() => {
    if (item) {
      setTitle(item.text);
      setImage(item.image);
      setRecipeGroup(item.group);
      setDescription(item.description);
    }
  }, []);

  function submitForm(e) {
    e.preventDefault();
    if (item) {
      dispatch(editRecipe(id, title, image, recipeGroup, description));
      status(false);
    } else {
      if (
        title.trim() &&
        image.trim() &&
        recipeGroup.trim() &&
        description.trim()
      ) {
        dispatch(createRecipe(title, image, recipeGroup, description));
        status(false);
      } else {
        setError(false);
      }
    }
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (!noError) {
      setError(true);
    }
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
          placeholder="Recipe title"
          variant="outlined"
          className={noError ? "titleInput" : "error"}
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
          <label
            htmlFor="file"
            className={noError ? "inputFileLabel" : "errorLabel"}
            variant="outlined"
          >
            Choose a image
          </label>
        ) : (
          <label htmlFor="file" className="inputFileLabel" variant="outlined">
            Change image: {image}
          </label>
        )}
        <select
          className={noError ? "inputSelect" : "errorSelect"}
          defaultValue={item ? recipeGroup : "Select recipe category"}
          onChange={handleGroupChange}
          required
        >
          <option defaultValue disabled>
            {item ? recipeGroup : "Select recipe category"}
          </option>
          {state.categories.map((group, index) => (
            <option key={index} value={group} className="inputOption">
              {group}
            </option>
          ))}
        </select>

        <TextField
          className={noError ? classes.textarea : "errorDescription"}
          placeholder="Please enter recipe description"
          multiline
          fullWidth
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        {item ? (
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
