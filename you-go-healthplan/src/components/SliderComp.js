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

  /*-----------Salary-------------*/

  const handleSliderChange2 = (event, newValue) => {
    setSalaryValue(newValue);
  };

  /*-----------Shorttime sickness-------------*/

  const handleSliderChange3 = (event, newValue) => {
    setShortValue(newValue);
  };

  const calculateMoneyLoss = () => {
    return (
      <div>
        <p>Hur mycket ni förlorar på korttidsfrånvaro varje år:</p>
        <h2>
          {numberWithSpaces(
            Math.round((shortValue / 100) * 227 * value * (salaryValue / 10))
          )}{" "}
          kr
        </h2>
      </div>
    );
  };

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  const firstSlider = () => {
    return (
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
          <p>{value}</p>
        </Grid>
      </div>
    );
  };

  const secondSlider = () => {
    return (
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
          <p>{salaryValue}</p>
        </Grid>
      </div>
    );
  };

  const thirdSlider = () => {
    return (
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
          <h3>{shortValue}</h3>
        </Grid>
      </div>
    );
  };

  return (
    <div>
      {firstSlider()}
      {secondSlider()}
      <hr />
      {thirdSlider()}
      <div className="moneyLoss">{calculateMoneyLoss()}</div>
    </div>
  );
}
