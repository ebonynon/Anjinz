import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js"; // ⛳
import Footer from "../../components/Footer/Footer.js"; // ⛳
import Parallax from "../../components/Parallax/Parallax.js";

import mainPageStyles from "../../assets/css/_views/mainPage.js";

// Sections for this page
import AddPartSection from "./Sections/AddPartSection.js";

const useStyles = makeStyles(mainPageStyles);

export default function AddPartPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Parallax filter image={require("../../assets/img/Car-Parts.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AddPartSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
