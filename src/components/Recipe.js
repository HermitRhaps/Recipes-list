import React, { useState } from "react";
import "../styles/recipe.scss";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { ModalOut } from "./modal/Modal";
import { deleteRecipe } from "../redux/actions/deleteRecipe";
const useStyles = makeStyles({
  card: {
    padding: "0.25rem",
  },
});
const Recipe = ({ index, item, dispatch }) => {
  const classes = useStyles();
  const [editIndex, setIndex] = useState();
  const [modalStatus, setModalStatus] = useState(false);
  const [modalType, setModalType] = useState("");
  const handlerecipemodals = (e) => {
    setModalType(e.currentTarget.dataset.type);
    setIndex(e.currentTarget.dataset.index);
    setModalStatus(true);
  };
  const handleRecipeDelete = () => {
    dispatch(deleteRecipe(editIndex));
  };
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea disabled>
        <CardMedia component="img" alt="" height="140" image={item.image} />
        <CardContent>
          <Typography variant="h5">{item.text}</Typography>
          <Typography variant="h6">{item.group}</Typography>
        </CardContent>
      </CardActionArea>

      <ButtonGroup fullWidth>
        <Button
          onClick={handlerecipemodals}
          data-type="Show"
          data-index={index}
        >
          More
        </Button>
        <Button
          data-index={index}
          data-type="Operation"
          onClick={handlerecipemodals}
        >
          Edit
        </Button>
        <Button
          data-index={index}
          data-type="Delete"
          onClick={handlerecipemodals}
        >
          Delete
        </Button>
      </ButtonGroup>

      {modalStatus ? (
        <ModalOut
          isOpen={setModalStatus}
          id={editIndex}
          type={modalType}
          item={item}
          recipeRemove={handleRecipeDelete}
        />
      ) : null}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Recipe);
