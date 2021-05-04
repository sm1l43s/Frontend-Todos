import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

let useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  root: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    borderBottom: "1px solid black",
    width: "80%",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const AdminFilter = ({
  searchWord,
  setSearchWord,
  pageSize,
  setPageSize,
  orderType,
  setOrderType,
  orderFields,
  setOrderFields,
  setCurrentPage,
}) => {
  const classes = useStyles();

  let [searchField, setSearchField] = useState(searchWord);

  const handleChangeSearchField = (e) => {
    setSearchField(e.target.value);
  };

  const handleClickSearch = (e) => {
    setSearchWord(searchField);
  };

  const valueCountTask = (value) => {
    setCurrentPage(1);
    setPageSize(value);
    return value;
  };

  const handleChangeOrderType = (event) => {
    setOrderType(event.target.value);
  };

  const handleChangeOrderFields = (event) => {
    setOrderFields(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputBase
            className={classes.input}
            placeholder="Search..."
            value={searchField}
            onChange={handleChangeSearchField}
          />
          <IconButton
            color="primary"
            className={classes.iconButton}
            onClick={handleClickSearch}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography id="discrete-slider" gutterBottom>
            Number of users on page
          </Typography>
          <Slider
            defaultValue={pageSize}
            getAriaValueText={valueCountTask}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={5}
            marks
            min={1}
            max={100}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sort by</FormLabel>
            <RadioGroup
              aria-label="sort"
              name="sortBy"
              value={orderType}
              onChange={handleChangeOrderType}
              className={classes.radioGroup}
            >
              <FormControlLabel
                value="asc"
                control={<Radio color="primary" />}
                label="Asceding"
              />
              <FormControlLabel
                value="desc"
                control={<Radio color="primary" />}
                label="Desceding"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Order By</FormLabel>
            <RadioGroup
              aria-label="order"
              name="orderBy"
              value={orderFields}
              onChange={handleChangeOrderFields}
            >
              <FormControlLabel
                value="id"
                control={<Radio color="primary" />}
                label="Ordinal number"
              />
              <FormControlLabel
                value="firstName"
                control={<Radio color="primary" />}
                label="First name"
              />
              <FormControlLabel
                value="lastName"
                control={<Radio color="primary" />}
                label="Last name"
              />
              <FormControlLabel
                value="email"
                control={<Radio color="primary" />}
                label="Email"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdminFilter;
