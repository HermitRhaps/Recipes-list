import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../../redux/actions/createRecipe";
import { editRecipe } from "../../../redux/actions/editRecipe";
import defaultImg from "../../../styles/download.png";
import {
  TextField,
  Grid,
  makeStyles,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    border: "2px solid red",
    borderRadius: "5%",
  },
  select: {
    color: "gray",
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
      if (title.trim() && recipeGroup.trim() && description.trim()) {
        dispatch(
          createRecipe(title, image || defaultImg, recipeGroup, description)
        );
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
    <Grid container>
      <Grid item xs={12}>
        <form
          onSubmit={submitForm}
          className="modal_form"
          noValidate
          autoComplete="off"
        >
          <Grid container justify="center" spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="Recipe title"
                variant="outlined"
                className={noError ? false : "error"}
                data-mydatafield="asdasdasdaad"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                onChange={submitImage}
                accept="image/*"
              />
            </Grid>
            <Grid item xs={8}>
              <Select
                onChange={handleGroupChange}
                required
                fullWidth
                variant="outlined"
                className={classes.select}
                value={recipeGroup ? recipeGroup : "Select recipe category"}
              >
                <MenuItem
                  defaultValue
                  disabled
                  value={"Select recipe category"}
                >
                  {"Select recipe category"}
                </MenuItem>
                {state.categories.map((group, index) => (
                  <MenuItem key={index} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                multiline
                label="Recipe description"
                variant="outlined"
                className={noError ? false : "error"}
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </Grid>
            <Grid item xs={8}>
              {item ? (
                <Button type="submit" variant="outlined">
                  Edit recipe
                </Button>
              ) : (
                <Button type="submit" variant="outlined">
                  Create recipe
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(CreateOrEdit);
