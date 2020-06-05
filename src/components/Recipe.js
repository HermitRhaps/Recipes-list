import React, { useState } from "react";
import "../styles/recipe.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EditRecipeForm from "./EditRecipeForm";
import { connect } from "react-redux";
import { deleteRecipe } from "../redux/actions/deleteRecipe";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Recipe = ({ index, item, dispatch }) => {
  const classes = useStyles();
  const [editRecipeModal, setEditRecupeModal] = useState(false);
  const [editIndex, setIndex] = useState();

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
          <Typography variant="body1" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          value={index}
          className="recipe_button"
          onClick={(e) => setIndex(e.target.value) || setEditRecupeModal(true)}
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
        {editRecipeModal ? <EditRecipeForm id={editIndex} /> : null}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Recipe);
