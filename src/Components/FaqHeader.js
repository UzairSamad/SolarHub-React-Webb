import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  faq: {
    height: "32px",
    background: "#534C46",
    width: "100%",
    display: "flex",
    alignItems: "center",
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  text1: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "14px",
  },
}));

const FaqHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.faq}>
      <div style={{ flex: 10 }}></div>
      <Typography variant="p" className={classes.text1}>
        FAQ
      </Typography>
      <span
        style={{
          width: "2px",
          height: "14px",
          margin: "0 15px",
          background: "#FFFFFF",
          opacity: 0.5,
          borderRadius: "3px",
        }}
      ></span>
      <Typography variant="p" className={classes.text1}>
        Warum Solarenergie?
      </Typography>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default FaqHeader;
