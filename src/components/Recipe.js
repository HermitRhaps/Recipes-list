import React, { useState } from "react";
import "../styles/recipe.scss";
import {
  TextField,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteRecipe } from "../redux/actions/deleteRecipe";
import { Modal } from "./modal/Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Recipe = ({ index, item, dispatch }) => {
  const classes = useStyles();
  const [editIndex, setIndex] = useState();
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="" height="140" image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h3">
            {item.text}
          </Typography>
          <Typography gutterBottom variant="h5">
            {item.group}
          </Typography>
          <TextField disabled multiline value={item.description} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          value={index}
          className="recipe_button"
          onClick={(e) => setIndex(e.target.value) || setModalStatus(true)}
        >
          Edit
        </button>
        <button
          value={index}
          className="recipe_button"
          onClick={(e) => dispatch(deleteRecipe(e.target.value))}
        >
          Delete
        </button>
        {modalStatus ? (
          <Modal isOpen={setModalStatus} id={editIndex} type="Edit" />
        ) : null}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Recipe);
