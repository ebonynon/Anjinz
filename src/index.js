import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
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

import mainPageStyles from "../../assets/css/_views/mainPage.js";

// Sections for this page
import SearchSection from "./Sections/SearchSection.js";
import AddPartSection from "./Sections/AddPartSection.js";

const useStyles = makeStyles(mainPageStyles);
var hist = createBrowserHistory();

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
          {/*<SearchSection />
           <br></br> // tmp tag for spacing
          <CardSection />
          <br></br> // tmp tag for spacing */}
          ReactDOM.render(
          <Router history={hist}>
            <Switch>
              <Route path="/add-part" component={AddPartSection} />
              <Route path="/" component={SearchSection} />
            </Switch>
          </Router>
          , document.getElementById("root") );
        </div>
      </div>
      <Footer />
    </div>
  );
}
