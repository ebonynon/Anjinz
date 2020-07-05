import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// core components
import Header from "../../components/Header/Header.js"; // ⛳
import Footer from "../../components/Footer/Footer.js"; // ⛳
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/css/_views/mainPage.js";

// Sections for this page
//import SectionAboutUs from "./Sections/AboutUsSection.js";

const useStyles = makeStyles(styles);

export default function MainPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Parallax filter image={require("../../assets/img/Car-Parts.jpg")}>
        <Typography className={classes.txt}>
          There is sometimes an incorrect assumption that the parser itself is
          what does everything necessary to facilitate the use of ESLint with
          TypeScript.
        </Typography>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Typography className={classes.txt}>Hello Fukers....!!!!</Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
}
