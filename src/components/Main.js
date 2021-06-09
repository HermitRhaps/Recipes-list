import React from "react";
import RecipeList from "./RecipesList";
import SideBarElements from "./Sidebar";
import { Grid } from "@material-ui/core";

export const Main = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={3} xs={12}>
        <SideBarElements />
      </Grid>
      <Grid item sm={9} xs={12}>
        <RecipeList />
      </Grid>
    </Grid>
  );
};
