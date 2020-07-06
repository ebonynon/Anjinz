import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
// core components

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

export default function AddPartSection() {
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
        <Grid item className={classes.gridItem} xs={10} lg={12}>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Brand"
            variant="filled"
            value={this.state.brand}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Modle"
            variant="filled"
            value={this.state.modle}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Applicability"
            variant="filled"
            value={this.state.applicability}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Part number"
            variant="filled"
            value={this.state.part_number}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Production period"
            variant="filled"
            value={this.state.production_period}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Image URL"
            variant="filled"
            value={this.state.image_url}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Base price"
            variant="filled"
            value={this.state.base_price}
            onChange={this.onChange}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={this.onSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
