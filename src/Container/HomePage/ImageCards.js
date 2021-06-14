import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Image3 from "../../Assets/image3.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative",
    margin: "0 0 0 -60px",
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  contentContainer: {
    position: "relative",
    zIndex: 2,
  },
  imgContainer2: {
    position: "relative",
    zIndex: -1,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  contentContainer2: {
    margin: "0 0 0 -60px",
    zIndex: 2,
    position: "relative",
  },

  subContainer: {
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  leftContainer: {
    margin: "50px 0 50px",
    background: "#fff",
    height: "390px",
    borderRadius: "6px",
  },
  rightContainer: {
    margin: "50px 0 50px",
    background: "#fff",
    height: "390px",
    borderRadius: "6px",
    paddingLeft: "80px",
  },

  linee: {
    background: "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
    borderRadius: "36px",
    borderLeft: "2px solid #FFAA39",
    height: "2px",
    marginRight: "10px",
  },
  heading1: {
    fontFamily: "Nunito",
    fontSize: "32px",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#666666",
    marginLeft: 15,
  },
  paraaa: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: 600,
    color: "#000000",
    marginLeft: 15,
    paddingRight: "100px",
  },
}));

const ImageCards = () => {
  const classes = useStyles();

  return (
    <div>
      <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Grid container>
          <Grid item sm={12} md={6} className={classes.contentContainer}>
            <div className={classes.leftContainer}>
              <Typography varaint="body2" className={classes.heading1}>
                <span className={classes.linee}></span> Los in die Zukunft
              </Typography>
              <Typography varaint="body2" className={classes.subtitle}>
                Solaranlage
              </Typography>
              <Typography varaint="body2" className={classes.paraaa}>
                Megapack speichert Ihre saubere Energie für zeitunabhängige
                Nutzung. Unser All-in-One-System kann problemlos an Ihr System
                angepasst werden – mit oder ohne Solaranlage, und hilft, Ihre
                Stromrechnungen ab dem ersten Tag zu reduzieren.
                <br />
                <br />
                Durch die Kombination von Hardware, Software, Installation und
                Service in einem integrierten System können wir die Kosten für
                den gesamten Lebenszyklus senken und zuverlässig Energie für
                Versorger und Entwickler gleichermaßen liefern.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6} className={classes.imgContainer}>
            <div>
              <img src={Image3} width="100%" />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.subContainer}>
          <Grid item sm={12} md={6} className={classes.imgContainer2}>
            <div>
              <img src={Image3} width="100%" />
            </div>
          </Grid>
          <Grid item sm={12} md={6} className={classes.contentContainer2}>
            <div className={classes.rightContainer}>
              <Typography varaint="body2" className={classes.heading1}>
                <span className={classes.linee}></span> Endlich autark
              </Typography>
              <Typography varaint="body2" className={classes.subtitle}>
                Unendliche Energie
              </Typography>
              <Typography varaint="body2" className={classes.paraaa}>
                Megapack speichert Ihre saubere Energie für zeitunabhängige
                Nutzung. Unser All-in-One-System kann problemlos an Ihr System
                angepasst werden – mit oder ohne Solaranlage, und hilft, Ihre
                Stromrechnungen ab dem ersten Tag zu reduzieren.
                <br />
                <br />
                Durch die Kombination von Hardware, Software, Installation und
                Service in einem integrierten System können wir die Kosten für
                den gesamten Lebenszyklus senken und zuverlässig Energie für
                Versorger und Entwickler gleichermaßen liefern.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageCards;
