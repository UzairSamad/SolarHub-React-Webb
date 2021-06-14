import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Typography,
  Grid,
  StepContent,
  Container,
  Tab,
  AppBar,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import solarImg from "../../Assets/solar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    // marginBottom: theme.spacing(2),
    background:
      "linear-gradient(90deg, #FFC531 6.25%, rgba(255, 243, 202, 0) 100%)",
    borderRadius: "36px",
  },
  stepCount: {
    "&.MuiStepLabel-root .MuiStepLabel-iconContainer svg circle": {
      color: "#FFAA39",
      boxShadow: "0px 2px 21px rgba(251, 218, 97, 0.64)",
    },
    "&.MuiStepLabel-root .MuiStepLabel-iconContainer svg .MuiStepIcon-text": {
      fill: "black",
      fontFamily: "Nunito",
      fontWeight: "bold",
    },
  },
  disableCount: {
    "&.MuiStepLabel-root .MuiStepLabel-iconContainer svg circle": {
      color: "#fff",
      boxShadow: "0px 2px 21px rgba(251, 218, 97, 0.64)",
    },
    "&.MuiStepLabel-root .MuiStepLabel-iconContainer svg .MuiStepIcon-text": {
      fill: "#A9A9A9",
      fontSize: "14px",
      fontFamily: "Nunito",
      fontWeight: "bold",
    },
  },
  leftTabs: {
    "&.MuiTabs-root .MuiTabs-scroller .MuiTabs-flexContainer button": {
      minWidth: "138px",
      color: "black",
      background: "#FFF3CA",
      borderRadius: "20px 20px 0 0",
      border: "1px solid #FBDA61",
      textTransform: "none",
    },
  },
}));

function getSteps() {
  return [
    "System Layout",
    "Configuration",
    "Zusatzkomponenten",
    "Bilder hochladen",
    "Ausschreibung &  Umsetzung",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "";
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

const SystemLayout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState("1");
  const [valueRight, setValueRight] = React.useState("1");
  const steps = getSteps();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeRightSide = (event, newValue) => {
    setValueRight(newValue);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            style={{ background: "#F8F8F8" }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                {console.log(index, "asadsdad")}
                <StepLabel
                  className={
                    index === 0 ? classes.stepCount : classes.disableCount
                  }
                >
                  {label}
                </StepLabel>
                <StepContent className={classes.actionsContainer}>
                  <Typography>{getStepContent(index)}</Typography>
                  <div>
                    {/* <div>
                  <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                  >
                  Back
                  </Button>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div> */}
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <div className={classes.root}>
                <TabContext value={value}>
                  <AppBar
                    position="static"
                    style={{ background: "none", boxShadow: "none" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="simple tabs example"
                      className={classes.leftTabs}
                    >
                      <Tab
                        label="Einsteiger"
                        value="1"
                        style={{
                          background:
                            value === "1"
                              ? "linear-gradient(135deg, #FBDA61 2.88%, #FFC371 100%)"
                              : "",
                        }}
                      />
                      <Tab
                        label="Eigenbedarf"
                        value="2"
                        style={{
                          background:
                            value === "2"
                              ? "linear-gradient(135deg, #FBDA61 2.88%, #FFC371 100%)"
                              : "",
                        }}
                      />
                      <Tab
                        label="Erzeuger"
                        value="3"
                        style={{
                          background:
                            value === "3"
                              ? "linear-gradient(135deg, #FBDA61 2.88%, #FFC371 100%)"
                              : "",
                        }}
                      />
                    </TabList>
                  </AppBar>
                  <TabPanel value="1">Item One</TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3" style={{ padding: 0 }}>
                    <div>
                      <img src={solarImg} width="100%" />
                    </div>
                  </TabPanel>
                </TabContext>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.root}>
                <TabContext value={valueRight}>
                  <AppBar position="static">
                    <TabList
                      onChange={handleChangeRightSide}
                      aria-label="simple tabs example"
                    >
                      <Tab label="Einsteiger" value="1" />
                      <Tab label="Eigenbedarf" value="2" />
                    </TabList>
                  </AppBar>
                  <TabPanel value="1">Item One</TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                </TabContext>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SystemLayout;
