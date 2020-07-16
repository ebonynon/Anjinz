import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

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
  console.log("CUST :: ", _customer);
  function createData(
    //_id,
    nic_number,
    customer_name,
    status_one,
    status_two,
    status_three
  ) {
    return {
      //_id,
      nic_number,
      customer_name,
      status_one,
      status_two,
      status_three,
    };
  }

  const rows = [
    createData(
      `${_customer.nic_number}`,
      `${_customer.customer_name}`,
      `${_customer.status_one}`,
      `${_customer.status_two}`,
      `${_customer.status_three}`
    ),
  ];

  return rows.map((row) => (
    <TableRow key={row.name}>
      <TableCell align="left">{row.nic_number}</TableCell>
      <TableCell align="left">{row.customer_name}</TableCell>
      <TableCell align="left">{row.status_one}</TableCell>
      <TableCell align="left">{row.status_two}</TableCell>
      <TableCell align="left">{row.status_three}</TableCell>
    </TableRow>
  ));
}
