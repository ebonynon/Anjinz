import React, { useState } from "react";
import axios from "axios";
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

  const [form, setValue] = useState({
    brand: "",
    modle: "",
    part_number: "",
    part_name: "",
  });

  const [ResData, setResData] = useState([]);

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
      part_number: form.part_number,
      part_name: form.part_name,
    };
    axios
      .post("https://anjinz-api.vercel.app/api/parts", data)
      .then((res) => {
        this.setState({
          brand: "",
          modle: "",
          applicability: "",
          part_number: "",
          part_name: "",
          production_period: "",
          image_url: "",
          base_price: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in SearchPart!");
      });
  };

  const onSubmitPN = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8082/api/parts?part_number=${form.part_number}`)
      .then((res) => {
        setResData(res.data);
      })
      .catch((err) => {
        console.log("Error in SearchPart-PN");
      });
  };
  console.log("ResData :", ResData);

  var CardSectionList;

  if (!ResData){
    CardSectionList = " Part is not availabe "
  } else {
    CardSectionList = ResData.map((part, index) => <CardSection part={part} key={index} />);
  }

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
            name="part_number"
            label="Part number"
            variant="filled"
            value={form.part_number}
            onChange={updateField}
            //fullWidth
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SearchIcon />}
            onClick={onSubmitPN}
          >
            Search
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            name="part_brand"
            label="Brand"
            variant="filled"
            value={form.part_brand}
            onChange={updateField}
          />
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            name="modle"
            label="Modle"
            variant="filled"
            value={form.modle}
            onChange={updateField}
          />
          <TextField
            className={classes.textFieldMini}
            id="outlined-basic"
            name="part_name"
            label="Part name"
            variant="filled"
            value={form.part_name}
            onChange={updateField}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SearchIcon />}
            onClick={onSubmit}
          >
            Search
          </Button>
        </Grid>
        {CardSectionList}
      </Grid>
    </div>
  );
}
