import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
// core components
import CardSection from "./CardSection.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      width: "97ch",
    },
    //width: "97ch",
  },
  textFieldMini: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      width: "31.5ch",
    },
    //width: "97ch",
  },
  button: {
    margin: theme.spacing(1),
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    float: "right!important",
    [theme.breakpoints.down("md")]: {
      paddingRight: "16px",
      marginRight: "85px",
    },
  },
  gridItem: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "13.5px",
    },
  },
}));

export default function SearchSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item className={classes.gridItem} xs={12} lg={12}>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Part number"
            variant="filled"
            //fullWidth
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            label="Brand"
            variant="filled"
          />
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            label="Modle"
            variant="filled"
          />
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            label="Part name"
            variant="filled"
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Grid>
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
      </Grid>
    </div>
  );
}
