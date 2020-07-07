import React, { useState } from "react";
import axios from "axios";
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

  const [form, setValue] = useState({
    brand: "",
    modle: "",
    applicability: "",
    part_number: "",
    production_period: "",
    image_url: "",
    base_price: "",
  });

  const updateField = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      brand: form.brand,
      modle: form.modle,
      applicability: form.applicability,
      part_number: form.part_number,
      production_period: form.production_period,
      image_url: form.image_url,
      base_price: form.base_price,
    };
    axios
      .post("https://anjinz-api.vercel.app/api/parts", data)
      .then((res) => {
        this.setState({
          brand: "",
          modle: "",
          applicability: "",
          part_number: "",
          production_period: "",
          image_url: "",
          base_price: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in AddPart!");
      });
  };

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
            value={form.brand}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Modle"
            variant="filled"
            value={form.modle}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Applicability"
            variant="filled"
            value={form.applicability}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Part number"
            variant="filled"
            value={form.part_number}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Production period"
            variant="filled"
            value={form.production_period}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Image URL"
            variant="filled"
            value={form.image_url}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Base price"
            variant="filled"
            value={form.base_price}
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
            onClick={onSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
