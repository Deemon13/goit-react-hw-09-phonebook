import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
  },
}));

export default function ButtonLogout({ text, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.label} onClick={onClick} variant="outlined">
        {text}
      </Button>
    </div>
  );
}
