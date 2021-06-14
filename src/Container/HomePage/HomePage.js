import React from "react";
import Header from "../../Components/Header";
import FaqHeader from "./../../Components/FaqHeader";
import heroImg from "../../Assets/hero.jpg";
import {
  Paper,
  Typography,
  Grid,
  Link,
  Container,
  TextField,
  Button,
  InputAdornment,
  ListItemText,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Search as SearchIcon,
  LocationOn as LocationOnIcon,
  WbSunny as WbSunnyIcon,
  FlashOn as FlashOnIcon,
} from "@material-ui/icons";
import CourseCards from "./CourseCards";
import ImageCards from "./ImageCards";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // paddingBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/random)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // [theme.breakpoints.down("xs")]: {
    //   width: "fit-content",
    // },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  searchInput: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 36px rgba(251, 218, 97, 0.34)",
    borderRadius: "336px",
    // border: "1px solid #FFE925",
    marginBottom: "20px",
    width: "400px",
    "&.MuiFormControl-root div.MuiOutlinedInput-root": {
      borderRadius: "336px",
      border: "1px solid #FFE925",
      paddingRight: 0,
    },
    "&.MuiFormControl-root div.MuiOutlinedInput-root .MuiInputAdornment-positionEnd .MuiTypography-root":
      {
        background:
          "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
        borderRadius: "336px",
        fontSize: "16px",
        fontFamily: "Nunito",
        // width: "50px",
        height: "30px",
      },
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  heroHeading1: {
    fontFamily: "Nunito",
    textTransform: "uppercase",
    fontSzie: "40px",
    lineHeight: "51px",
    borderLeft: "1px solid #FFAA39",
    borderLeftWidth: "3px !important",
    paddingLeft: 10,
  },
  subTitle: {
    color: "#FBDA61",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "25px",
    marginLeft: 15,
    marginBottom: "50px",
  },
  homeContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
  },
  bookingBtn: {
    fontFamily: "Nunito",
    fontSize: "16px",
    borderRadius: "36px",
    background: "#FFAA39",
    textTransform: "none",
    "&:hover": {
      background: "#FFAA39",
    },
  },
  avatar: {
    background: "none",
    border: "1px solid #FFAA39",
    width: "50px",
    height: "50px",
  },
  textPri: {
    "&.MuiListItemText-root .MuiListItemText-primary": {
      fontSize: "32px",
      fontFamily: "Nunito",
      fontWeight: 800,
      color: "#FFE925",
    },
  },
  textSec: {
    fontSize: "20px",
    fontFamily: "Nunito",
    fontWeight: 800,
    color: "#fff",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Header callTitle="Ruf uns an" />
      <FaqHeader />
      <div>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className={classes.overlay} />
          <Container style={{ marginBottom: "30px" }}>
            <Grid container>
              <Grid item md={9}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    variant="h3"
                    color="inherit"
                    className={classes.heroHeading1}
                    gutterBottom
                  >
                    Solarenergie in der Industrie
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.subTitle}
                  >
                    Jetzt Energiekosten sparen
                  </Typography>
                  <TextField
                    id="input-with-icon-textfield"
                    //   label="Informationssuche"
                    placeholder="Informationssuche"
                    variant="outlined"
                    size="small"
                    className={classes.searchInput}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon
                            style={{
                              color: "#FFAA39",
                              padding: "5px 0",
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography
                            style={{
                              color: "#111111",
                              padding: "5px 0",
                              width: "100px",
                              textAlign: "center",
                              marginTop: 2,
                            }}
                          >
                            Entdecken
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div>
                    <Button variant="contained" className={classes.bookingBtn}>
                      Kostenfreies Beratungsgespräch buchen
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md" style={{ paddingBottom: "50px" }}>
            <Grid container style={{ justifyContent: "center" }} spacing={4}>
              <Grid item xs={12} sm={4}>
                <ListItem>
                  <ListItemAvatar style={{ minWidth: "70px" }}>
                    <Avatar className={classes.avatar}>
                      <WbSunnyIcon style={{ fontSize: 30, color: "#FFE925" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="250+"
                    className={classes.textPri}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.textSec}
                        >
                          Umgesetzte Solarprojekte
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ListItem>
                  <ListItemAvatar style={{ minWidth: "70px" }}>
                    <Avatar className={classes.avatar}>
                      <FlashOnIcon style={{ fontSize: 30, color: "#FFE925" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="1GWh+"
                    className={classes.textPri}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.textSec}
                        >
                          Generierte Leistung
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ListItem>
                  <ListItemAvatar style={{ minWidth: "70px" }}>
                    <Avatar className={classes.avatar}>
                      <WbSunnyIcon style={{ fontSize: 30, color: "#FFE925" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="1500+"
                    className={classes.textPri}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.textSec}
                        >
                          Industriepartner
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <CourseCards />
        <ImageCards />
      </div>
    </div>
  );
};

export default HomePage;
