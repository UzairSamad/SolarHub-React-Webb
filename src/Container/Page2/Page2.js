import React from "react";
import Header from "../../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core/";
import {
  Home as HomeIcon,
  Lock as LockIcon,
  ArrowForward as ArrowForwardIcon,
} from "@material-ui/icons/";
import Rating from "@material-ui/lab/Rating";
import SystemLayout from "../../Components/SystemLayout/SystemLayout";

const useStyles = makeStyles((theme) => ({
  faq: {
    height: "32px",
    background: "#534C46",
    width: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  text1: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "14px",
  },
  text2: {
    "&.MuiListItemText-root .MuiListItemText-primary": {
      fontFamily: "Nunito",
      fontWeight: 600,
      fontSize: "16px",
    },
  },

  text3: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "20px",
  },
  text4: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "uppercase",
    color: "#666666",
    marginTop: 30,
    marginLeft: 18,
  },
  text5: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "16px",
    // textTransform: "uppercase",
    marginRight: "150px",
    color: "#4B8F0B",
    marginLeft: 18,
  },
  text6: {
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "14px",
    color: "#111111",
  },

  lineeee: {
    width: "4px",
    height: "35px",
    background: "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
    borderRadius: "36px",
    marginRight: 15,
  },

  btn1: {
    background: "linear-gradient(226.42deg, #1B4963 8.93%, #09152F 110.98%)",
    borderRadius: "36px",
    color: "#fff",
    textTransform: "none",
    fontFamily: "Nunito",
    fontSize: "14px",
  },
}));

const Page2 = (props) => {
  const classes = useStyles();
  return (
    <div style={{ background: "#F8F8F8" }}>
      <Header />

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

      <Container style={{ marginTop: 20 }}>
        <Grid container>
          <Grid xs={2}>
            <ListItem style={{ padding: 0, paddingLeft: "16px" }}>
              <ListItemIcon
                style={{
                  minWidth: "30px",
                  marginRight: 10,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)",
                }}
              >
                <HomeIcon
                  style={{ color: "#fff", fontSize: 20, marginLeft: 5 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Industriegebäude"
                className={classes.text2}
              />
            </ListItem>
          </Grid>
          <Grid xs={8}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={classes.lineeee}></div>
              <Typography variant="p" className={classes.text3}>
                Willkommen in ihrem neuen Energiekonzept für ihr Gebäude
              </Typography>
            </div>
            <Typography variant="p" className={classes.text4}>
              Willkommen in ihrem neuen Energiekonzept für ihr Gebäude
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Button variant="contained" className={classes.btn1}>
              <span>
                <LockIcon
                  style={{
                    color: "#FBDA61",
                    fontSize: 20,
                    marginTop: 5,
                    marginRight: 5,
                  }}
                />
              </span>
              Speichern
            </Button>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 20 }}>
          <Grid xs={2}>
            <div
              style={{
                paddingLeft: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#FFAA39" }}>4.3</span>
              <Rating
                name="rating"
                defaultValue={2.5}
                precision={0.5}
                style={{ color: "#FFAA39" }}
              />
            </div>
          </Grid>
          <Grid xs={8}>
            <Typography variant="body2" className={classes.text5}>
              Ihr Dach ist sehr gut geeignet! Konfigurieren Sie nun ihr
              Solarprojekt - selbstständig oder mit Hilfe unserer Experten
            </Typography>
          </Grid>
          <Grid xs={2}>
            <div>
              <Typography variant="body2" className={classes.text6}>
                Projekt teilen
                <span style={{ display: "flex", alignItems: "center" }}>
                  <ArrowForwardIcon />
                </span>
              </Typography>
            </div>
          </Grid>
        </Grid>

        <SystemLayout />
      </Container>
    </div>
  );
};

export default Page2;
