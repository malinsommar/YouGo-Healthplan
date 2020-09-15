import React from "react";
import "../styling/slidercomp.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  input: {
    width: 65,
  },
});

export default function InputSlider({ title }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(300);
  const [salaryValue, setSalaryValue] = React.useState(30000);
  const [shortValue, setShortValue] = React.useState(5);

  /*-----------Number of employees-------------*/

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
    } else if (value > 2000) {
      setValue(2000);
    }
  };

  /*-----------Salary-------------*/

  const handleSliderChange2 = (event, newValue) => {
    setSalaryValue(newValue);
  };

  const handleInputChange2 = (event) => {
    setSalaryValue(
      event.target.salaryValue === "" ? "" : Number(event.target.salaryValue)
    );
  };

  const handleBlur2 = () => {
    if (salaryValue < 20000) {
      setSalaryValue(20000);
    } else if (salaryValue > 90000) {
      setSalaryValue(90000);
    }
  };

  /*-----------Shorttime sickness-------------*/

  const handleSliderChange3 = (event, newValue) => {
    setShortValue(newValue);
  };

  const handleInputChange3 = (event) => {
    setShortValue(
      event.target.shortValue === "" ? "" : Number(event.target.shortValue)
    );
  };

  const handleBlur3 = () => {
    if (shortValue < 0) {
      setShortValue(0);
    } else if (shortValue > 100) {
      setShortValue(100);
    }
  };

  const calculateMoneyLoss = () => {
    return (
      <div>
        <p>Pengar som företaget förlorar på korttidsfrånvaro:</p>
        <h2>
          {numberWithSpaces(
            Math.round((shortValue / 100) * 227 * value * (salaryValue / 10))
          )}
        </h2>
      </div>
    );
  };

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <div>
      <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
          Antal anställda (st)
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              min={1}
              max={2000}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 1,
                max: 2000,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
          Genomsnittig månadslön (kr)
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof salaryValue === "number" ? salaryValue : 0}
              onChange={handleSliderChange2}
              min={20000}
              max={90000}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={salaryValue}
              margin="dense"
              onChange={handleInputChange2}
              onBlur={handleBlur2}
              inputProps={{
                step: 100,
                min: 1,
                max: 2000,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </div>

      <hr />

      <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
          Korttidsfrånvaro (%)
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof shortValue === "number" ? shortValue : 0}
              onChange={handleSliderChange3}
              min={0}
              max={40}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={shortValue}
              margin="dense"
              onChange={handleInputChange3}
              onBlur={handleBlur3}
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className="moneyLoss">{calculateMoneyLoss()}</div>
    </div>
  );
}
