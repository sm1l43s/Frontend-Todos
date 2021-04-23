import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

let useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
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

const TaskFilter = ({
  pageSize,
  setPageSize,
  filterStatus,
  setFilterStatus,
  setCurrentPage,
  typeOrder,
  setTypeOrder,
  orderFields,
  setOrderFields,
  searchWord,
  setSearchWord,
}) => {
  const classes = useStyles();

  const [searchField, setSearchField] = useState(searchWord);

  const handleChangeTask = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleChangeOrderType = (event) => {
    setTypeOrder(event.target.value);
  };

  const handleChangeOrderFields = (event) => {
    setOrderFields(event.target.value);
  };

  const handleChangeSearchWord = (event) => {
    setSearchField(event.target.value);
  };

  const handleClickSearch = (event) => {
    setSearchWord(searchField);
  };

  const valueCountTask = (value) => {
    setCurrentPage(1);
    setPageSize(value);
    return value;
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputBase
            className={classes.input}
            placeholder="Search by title..."
            value={searchField}
            onChange={handleChangeSearchWord}
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
            Number of task on page
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
            <FormLabel component="legend">Task</FormLabel>
            <RadioGroup
              aria-label="task"
              name="task1"
              value={filterStatus}
              onChange={handleChangeTask}
              className={classes.radioGroup}
            >
              <FormControlLabel
                value="all"
                control={<Radio color="primary" />}
                label="All"
              />
              <FormControlLabel
                value="ACTIVE"
                control={<Radio color="primary" />}
                label="Active"
              />
              <FormControlLabel
                value="COMPLETED"
                control={<Radio color="primary" />}
                label="Completed"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sort by</FormLabel>
            <RadioGroup
              aria-label="sort"
              name="sortBy"
              value={typeOrder}
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
                value="title"
                control={<Radio color="primary" />}
                label="Title"
              />
              <FormControlLabel
                value="description"
                control={<Radio color="primary" />}
                label="Description"
              />
              <FormControlLabel
                value="startDate"
                control={<Radio color="primary" />}
                label="Date start task"
              />
              <FormControlLabel
                value="endDate"
                control={<Radio color="primary" />}
                label="Date end task"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TaskFilter;
