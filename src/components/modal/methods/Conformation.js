import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    textAlign: "center",
  },
});
export const Conformation = ({ status, remove }) => {
  const classes = useStyles();
  const handleRemove = () => {
    remove();
    status(false);
  };
  const handleClose = () => {
    status(false);
  };
  return (
    <Grid container className={classes.wrapper} spacing={2}>
      <Grid item xs={12}>
        <h1>Are you sure?</h1>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={handleRemove}>
          Yes
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={handleClose}>
          No
        </Button>
      </Grid>
    </Grid>
  );
};
