import React, { useState } from "react";
import "../styles/recipe.scss";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { ModalOut } from "./modal/Modal";
import { deleteRecipe } from "../redux/actions/deleteRecipe";
const useStyles = makeStyles({
  root: {
    background: "#e7e5e5",
    maxWidth: 345,
    overflowWrap: "break-word",
  },
  h3: {
    fontSize: "1.45rem",
    color: "black",
    marginBottom: "3%",
  },
  h5: {
    fontSize: "1.15rem",
    color: "blue",
  },
});
const Recipe = ({ index, item, dispatch }) => {
  const classes = useStyles();
  const [editIndex, setIndex] = useState();
  const [modalStatus, setModalStatus] = useState(false);
  const [modalType, setModalType] = useState("");
  const handlerecipemodals = (e) => {
    setModalType(e.target.attributes.getNamedItem("data-type").value);
    setIndex(e.target.value);
    setModalStatus(true);
  };
  const handleRecipeDelete = () => {
    dispatch(deleteRecipe(editIndex));
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea disabled>
        <CardMedia component="img" alt="" height="140" image={item.image} />
        <CardContent>
          <Typography variant="h3" className={classes.h3}>
            {item.text}
          </Typography>
          <Typography variant="h5" className={classes.h5}>
            {item.group}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          onClick={handlerecipemodals}
          data-type="Show"
          value={index}
          className="recipe_button"
        >
          More
        </button>
        <button
          value={index}
          data-type="Operation"
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
          <ModalOut
            isOpen={setModalStatus}
            id={editIndex}
            type={modalType}
            item={item}
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
