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
import { Modal } from "./modal/Modal";
import { deleteRecipe } from "../redux/actions/deleteRecipe";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "1%",
  },
});
const Recipe = ({ index, item, dispatch }) => {
  const classes = useStyles();
  const [editIndex, setIndex] = useState();
  const [modalStatus, setModalStatus] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteCompfirm, setDeleteCompfirm] = useState(false);
  const handlerecipemodals = (e) => {
    setModalType(e.target.attributes.getNamedItem("data-type").value);
    setIndex(e.target.value);
    setModalStatus(true);
  };
  const handleRecipeDelete = () => {
    dispatch(deleteRecipe(editIndex));
  };
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
          data-type="Edit"
          className="recipe_button"
          onClick={handlerecipemodals}
        >
          Edit
        </button>
        <button
          value={index}
          data-type="Delete"
          className="recipe_button"
          onClick={handlerecipemodals}
        >
          Delete
        </button>
        {modalStatus ? (
          <Modal
            isOpen={setModalStatus}
            id={editIndex}
            type={modalType}
            recipeRemove={handleRecipeDelete}
          />
        ) : null}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Recipe);
