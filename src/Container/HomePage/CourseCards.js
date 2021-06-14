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
    minWidth: 275,
    padding: "20px",
    background: "#fff",
    borderRadius: "16px",
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
    borderLeft: "1px solid red",
  },
});

const CourseCards = () => {
  const classes = useStyles();

  return (
    <div style={{ background: "#F8F8F8", paddingTop: "30px" }}>
      <Container>
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Typography variant="h2" className={classes.heading}>
            Der Ablauf ihres Solarprojektes
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root} variant="outlined">
              <Typography variant="body2">1</Typography>
              <div style={{ width: "100%", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar style={{ margin: "auto" }}>
                    <HomeIcon />
                  </Avatar>
                </ListItemAvatar>
                <Typography>Interne Bearbeitung & Kontaktaufnahme</Typography>
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
