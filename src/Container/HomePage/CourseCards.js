import React from "react";
import {
  Grid,
  Container,
  Card,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home as HomeIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    padding: "20px",
    background: "#fff",
    borderRadius: "16px",
    "&:hover > p": {
      color: "#FBDA61",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    fontFamily: "Nunito",
    fontSize: "32px",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  linee: {
    background: "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
    borderRadius: "36px",
    borderLeft: "2px solid #FFAA39",
    height: "2px",
    marginRight: "10px",
  },
  counts: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: "36px",
    color: "#FFF3CA",
  },
  cardTypo: {
    fontFamily: "Nunito",
    textTransform: "uppercase",
    padding: "20px",
    fontWeight: 600,
  },

  hrLine: {
    background: "linear-gradient(135deg, #FBDA61 2.88%, #FFC371 100%)",
    borderRadius: "16px",
    width: "100%",
    height: "1px",
  },
});

const CourseCards = () => {
  const classes = useStyles();

  return (
    <div style={{ background: "#F8F8F8", paddingTop: "30px" }}>
      <Container>
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Typography variant="h2" className={classes.heading}>
            <span className={classes.linee}></span>
            Der Ablauf ihres Solarprojektes
          </Typography>
        </div>
        <Grid container spacing={3} style={{ paddingBottom: "50px" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <Typography variant="body2" className={classes.counts}>
                1
              </Typography>
              <div style={{ width: "100%", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar
                    style={{
                      margin: "auto",
                      background:
                        "linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)",
                      width: "62px",
                      height: "62px",
                    }}
                  >
                    <HomeIcon style={{ fontSize: 40 }} />
                  </Avatar>
                </ListItemAvatar>
                <Typography variant="body2" className={classes.cardTypo}>
                  Interne Bearbeitung & Kontaktaufnahme
                </Typography>
                <div className={classes.hrLine}></div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <Typography variant="body2" className={classes.counts}>
                2
              </Typography>
              <div style={{ width: "100%", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar
                    style={{
                      margin: "auto",
                      background:
                        "linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)",
                      width: "62px",
                      height: "62px",
                    }}
                  >
                    <HomeIcon style={{ fontSize: 40 }} />
                  </Avatar>
                </ListItemAvatar>
                <Typography
                  variant="body2"
                  className={classes.cardTypo}
                  style={{ padding: "20px 40px" }}
                >
                  Vor-Ort-Besichtigung & Anlieferung
                </Typography>
                <div className={classes.hrLine}></div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <Typography variant="body2" className={classes.counts}>
                3
              </Typography>
              <div style={{ width: "100%", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar
                    style={{
                      margin: "auto",
                      background:
                        "linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)",
                      width: "62px",
                      height: "62px",
                    }}
                  >
                    <HomeIcon style={{ fontSize: 40 }} />
                  </Avatar>
                </ListItemAvatar>
                <Typography
                  variant="body2"
                  className={classes.cardTypo}
                  style={{ padding: "20px 70px" }}
                >
                  Installation & Inbetriebnahme
                </Typography>
                <div className={classes.hrLine}></div>
              </div>
            </Card>
          </Grid>

          {/* <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default CourseCards;
