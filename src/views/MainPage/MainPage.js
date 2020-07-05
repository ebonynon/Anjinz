import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "../../components/Header/Header.js"; // ⛳
import Footer from "../../components/Footer/Footer.js"; // ⛳
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/css/_views/mainPage.js";

// Sections for this page
//import SectionAboutUs from "./Sections/AboutUsSection.js";
import SearchSection from "./Sections/SearchSection.js";
import CardSection from "./Sections/CardSection.js"

const useStyles = makeStyles(styles);

export default function MainPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Parallax filter image={require("../../assets/img/Car-Parts.jpg")}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4">
                There is sometimes an incorrect assumption that the parser
                itself is what of ESLint with TypeScript.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SearchSection />
          <br></br> {/*  tmp tag for spacing */}
          <CardSection />
          <br></br> {/* tmp tag for spacing */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
