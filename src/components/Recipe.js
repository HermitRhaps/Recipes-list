import React, { useState } from "react";
import "../styles/recipe.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EditRecipeForm from "./EditRecipeForm";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export const Recipe = (props, { edit }) => {
  const classes = useStyles();
  const [editRecipeModal, setEditRecupeModal] = useState(false);
  const [editIndex, setIndex] = useState();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={props.state.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h3">
            {props.state.text}
          </Typography>
          <Typography gutterBottom variant="h5">
            {props.state.group}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.state.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // <div className="container">
    //   <h1>{props.state.text}</h1>
    //   <h2>{props.state.group}</h2>
    //   {editRecipeModal ? <EditRecipeForm id={editIndex} /> : null}
    //   <form className="form" onSubmit={(e) => e.preventDefault()}>
    //     <img src={props.state.image} alt="" />
    //     <textarea value={props.state.description} disabled />
    //     <button
    //       value={props.index}
    //       onClick={(e) => setEditRecupeModal(true) || setIndex(e.target.value)}
    //     >
    //       Re
    //     </button>
    //   </form>
    // </div>
  );
};
