import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});
export default function Security() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.root}>Security</h1>
    </div>
  );
}
