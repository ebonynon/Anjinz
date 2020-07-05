import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// core components
import Header from "../../components/Header/Header.js"; // ⛳
import Footer from "../../components/Footer/Footer.js"; // ⛳

import styles from "../../assets/css/_views/mainPage.js";

// Sections for this page
//import SectionAboutUs from "./Sections/AboutUsSection.js";

const useStyles = makeStyles(styles);

export default function MainPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Typography>Hello World....!!!!</Typography>
      <div className={classes.main}>
        <div className={classes.container}>
          <Typography>Hello Fukers....!!!!</Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
}
