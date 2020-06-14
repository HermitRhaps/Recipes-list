import React, { useState, useEffect, Fragment } from "react";
import "../../../styles/show.scss";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
const Show = ({ item, id, state }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipeGroup, setRecipeGroup] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (item) {
      setTitle(item.text);
      setImage(item.image);
      setRecipeGroup(item.group);
      setDescription(item.description);
    } else {
      setTitle(state.recipes[id].text);
      setImage(state.recipes[id].image);
      setRecipeGroup(state.recipes[id].group);
      setDescription(state.recipes[id].description);
    }
  }, []);
  return (
    <Fragment>
      <div className="recipe_card">
        <div className="recipe_row">
          <div className="recipe_img_container">
            <img src={image} alt="" className="recipe_img" />
          </div>
          <div className="recipe_body">
            <div className="recipe_title">
              <h2>Recipe name: {title}</h2>
            </div>
            <div className="recipe_group">
              <h3>Recipe category: {recipeGroup}</h3>
            </div>
          </div>
        </div>
        <div className="recipe_row">
          <div className="recipe_description_container">
            <p>Recipe detail: </p>
            <TextField
              aria-label="naked"
              disabled
              multiline
              value={description}
              className="recipe_description"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Show);
