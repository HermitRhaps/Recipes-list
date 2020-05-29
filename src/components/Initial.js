import React, { useState } from "react";
import CreateForm from "./CreateRecipeForm";
import RecipeList from "./Recipes-list";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SideBarElements from "./SideBarElements";
import Modal from "@material-ui/core/Modal";
import "../styles/initial.scss";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 10,
    maxWidth: 250,
    marginBottom: 5,
  },
  modal: {
    boxSizing: "borderBox",
    position: "absolute",
    paddding: "10%",
    width: 400,
    background: "#fffff",
    border: "1px solid #333",
    top: "100%",
    left: "50%",
  },
}));

export const Initial = ({ state }) => {
  const [createModal, setCreateModal] = useState(false);
  const classes = useStyles();
  function showCreateModal(e) {
    setCreateModal(true);
  }
  function hideModal() {
    setCreateModal(false);
  }
  return (
    <div className="initital_container">
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        data-do="createModal"
        onClick={showCreateModal}
      >
        Create new recipe
      </Button>
      {createModal ? (
        <Modal
          direction="column"
          alignItems="flex-start"
          open={createModal}
          onClose={hideModal}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <CreateForm />
        </Modal>
      ) : null}
      <Grid container spacing={3} wrap="nowrap">
        <Grid
          container
          item
          xs={12}
          sm={3}
          direction="column"
          alignItems="flex-start"
        >
          <SideBarElements style={classes} />
        </Grid>
        <Grid item xs={10} sm={9} wrap="nowrap">
          <RecipeList />
        </Grid>
      </Grid>
    </div>
  );
};
