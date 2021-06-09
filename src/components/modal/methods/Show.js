import React, { useState, useEffect, Fragment } from "react";
import {
  TextField,
  Grid,
  makeStyles,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";

import { connect } from "react-redux";
const useStyles = makeStyles({
  img: {
    maxWidth: "12rem",
    maxHeight: "auto",
  },
});
const Show = ({ item, id, state }) => {
  const classes = useStyles();
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
    <Grid container spacing={2}>
      <Grid item sm={5} xs={12}>
        <img src={image} alt="" className={classes.img} />
      </Grid>
      <Grid item sm={5} xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>Recipe name: {title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Recipe category: {recipeGroup}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Recipe detail:</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              aria-label="naked"
              disabled
              multiline
              value={description}
              className="recipe_description"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <div className="recipe_card">
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
      </div> */}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Show);
