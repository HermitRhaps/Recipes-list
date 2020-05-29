import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/createRecipe";
const CreateRecipeForm = ({ dispatch, state }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");
  function submitForm(e) {
    e.preventDefault();
  }
  function submitClick(e) {
    if (
      title.trim() &&
      image.trim() &&
      recipeGroup.trim() &&
      description.trim()
    ) {
      dispatch(createRecipe(title, image, recipeGroup, description));
      console.log(state);
    } else {
      dispatch(createRecipe(title, image, state.categories[0], description));
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
    <Fragment>
      <h2>Create form</h2>
      <form onSubmit={submitForm} className="form">
        <input
          value={title}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={submitClick}>
          Click
        </button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(CreateRecipeForm);
