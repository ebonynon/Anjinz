import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function DashboardSection(props) {
  const classes = useStyles();
  const [ResData, setResData] = useState([]);

  useEffect(() => {
    function fetchCustomers(props) {
      axios
        .get("http://localhost:8082/api/customers")
        .then((res) => {
          console.log("DashboardSection-API-response: " + res.data);
          setResData(res.data);
        })
        .catch((err) => {
          console.log("Error from DashboardSection");
        });
    }
    fetchCustomers(props);
  }, [props]);

  console.log("XX :: ", ResData);

  var TableRowList;

  if (!ResData) {
    TableRowList = "there is no customers recored!";
  } else {
    TableRowList = ResData.map((customer, k) => (
      <TableRowCustomer customer={customer} key={k} />
    ));
  }

  //  const cccc = ResData.map(customer);
  //  console.log("CUST :: ", cccc);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} lg={12}>
          <TableContainer component={Paper}>
            <Table aria-label="part table">
              <TableBody>{TableRowList}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

function TableRowCustomer(props) {
  const _customer = props.customer;

  const [state, setState] = React.useState({
    checkedOne: _customer.status_one,
    checkedTwo: _customer.status_two,
    checkedThree: _customer.status_three,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function createData(
    //_id,
    nic_number,
    customer_name
    // status_one,
    // status_two,
    // status_three
  ) {
    return {
      //_id,
      nic_number,
      customer_name,
      //   status_one,
      //   status_two,
      //   status_three,
    };
  }

  const rows = [
    createData(
      `${_customer.nic_number}`,
      `${_customer.customer_name}`
      //   `${_customer.status_one}`,
      //   `${_customer.status_two}`,
      //   `${_customer.status_three}`
    ),
  ];

  return rows.map((row) => (
    <TableRow key={row.name}>
      <TableCell align="left">
        <FormLabel>{row.nic_number}</FormLabel>
      </TableCell>
      <TableCell align="left">
        <Link href={`/dashboard/${_customer._id}`}>
          <FormLabel>{row.customer_name}</FormLabel>
        </Link>
      </TableCell>
      <TableCell align="left">
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedOne}
              onChange={handleChange}
              name="checkedOne"
            />
          }
          label="Noted"
        />
      </TableCell>
      <TableCell align="left">
        <FormControlLabel
          control={
            <YellowCheckbox
              checked={state.checkedTwo}
              onChange={handleChange}
              name="checkedTwo"
            />
          }
          label="Ordered"
        />
      </TableCell>
      <TableCell align="left">
        <FormControlLabel
          control={
            <RedCheckbox
              checked={state.checkedThree}
              onChange={handleChange}
              name="checkedThree"
            />
          }
          label="Delivered"
        />
      </TableCell>
    </TableRow>
  ));
}
