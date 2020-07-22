import React, { useState } from 'react'
import axios from 'axios'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// @material-ui/icons
import SearchIcon from '@material-ui/icons/Search'
// core components
import CardSection from './CardSection.js'

//////////////////////////////////////////////
import { connect, useDispatch } from 'react-redux'
import * as actions from './actions'
//////////////////////////////////////////////

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

function SearchSection() {
  ///////////////////////////////////////////////////////////////
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch(
      actions
        .fetchPart(
          form.brand,
          form.modle,
          form.part_name,
        )(getPart => {
          setResData(getPart.payload)
        })
        .catch(err => {
          console.log('Error in getPart@redux! ', err)
        }),
    )
  }
  ///////////////////////////////////////////////////////////////

  const classes = useStyles()

  const [form, setValue] = useState({
    brand: '',
    modle: '',
    part_number: '',
    part_name: '',
  })

  const [ResData, setResData] = useState([])

  const updateField = e => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // const onSubmit = e => {
  //   e.preventDefault()

  //   axios
  //     .get(
  //       `https://anjinz-api.vercel.app/api/parts?brand=${form.brand}&modle=${form.modle}&part_name=${form.part_name}`,
  //     )
  //     .then(res => {
  //       setResData(res.data)
  //     })
  //     .catch(err => {
  //       console.log('Error in SearchPart!')
  //     })
  // }

  const onSubmitPN = e => {
    e.preventDefault()

    axios
      .get(`https://anjinz-api.vercel.app/api/parts?part_number=${form.part_number}`)
      .then(res => {
        setResData(res.data)
      })
      .catch(err => {
        console.log('Error in SearchPart-PN!')
      })
  }
  // console.log("ResData :", ResData);

  var CardSectionList

  if (!ResData) {
    CardSectionList = 'Part is not availabe'
  } else {
    CardSectionList = ResData.map((part, index) => (
      <CardSection part={part} key={index} />
    ))
  }

  return (
    <div className={classes.root}>
      <div class="container">
        <div class="row justify-content-around align-items-center p-2">
          <TextField
            id="outlined-basic"
            name="part_number"
            label="Part number"
            variant="filled"
            value={form.part_number}
            onChange={updateField}
            fullWidth={true}
            class="col-md-10 col-sm-12"
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<SearchIcon />}
            onClick={onSubmitPN}
          >
            Search
          </Button>
        </div>
        <div class="row justify-content-around align-items-center p-2">
          <TextField
            class="col-md-3 col-sm-12"
            id="outlined-basic"
            name="brand"
            label="Brand"
            variant="filled"
            value={form.brand}
            onChange={updateField}
            fullWidth={true}
          />
          <TextField
            class="col-md-3 col-sm-12"
            id="outlined-basic"
            name="modle"
            label="Modle"
            variant="filled"
            value={form.modle}
            onChange={updateField}
            fullWidth={true}
          />
          <TextField
            class="col-md-3 col-sm-12"
            id="outlined-basic"
            name="part_name"
            label="Part name"
            variant="filled"
            value={form.part_name}
            onChange={updateField}
            fullWidth={true}
          />
          <Button
            variant="contained"
            color="default"
            startIcon={<SearchIcon />}
            onClick={onSubmit}
          >
            Search
          </Button>
        </div>
        {CardSectionList}
      </div>
    </div>
  )
}

export default connect(null, actions)(SearchSection)
