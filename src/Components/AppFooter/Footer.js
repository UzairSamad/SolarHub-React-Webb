import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import {
  Call as CallIcon,
  LocationOn as LocationOnIcon,
  Mail as MailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";
import AppLogo from "../../Assets/applogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
    marginTop: "50px",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#534C46",
  },
  contactContainer: {
    padding: "80px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0",
    },
  },
  socialContaienr: {
    paddingTop: "170px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "120px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0",
    },
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  listItemss: {
    padding: 0,
    "&.MuiListItem-root > .MuiListItemIcon-root": {
      minWidth: "30px",
    },
    "&.MuiListItem-root > .MuiListItemIcon-root > svg": {
      color: "#fff",
      fontSize: "18px",
    },
    "&.MuiListItem-root > .MuiListItemText-root": {
      color: "#fff",
    },
    "&.MuiListItem-root > .MuiListItemText-root .MuiListItemText-primary": {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 600,
      fontFamily: "Nunito",
      lineHeight: "22.5px",
    },
  },
  linksss: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Nunito",
    padding: "5px 0",
    lineHeight: "22.5px",
  },
  heading: {
    color: "#fff",
    fontFamily: "Nunito",
    fontWeight: 700,
    fontSize: "18px",
  },

  copyRight: {
    padding: "15px 0",
    textAlign: "center",
    borderTop: "1px solid #ffffff80",
  },
  rights: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ padding: "20px" }}>
                <img src={AppLogo} width="50%" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.contactContainer}>
                <Typography variant="h6" className={classes.heading}>
                  Contact Info
                </Typography>
                <List aria-label="main mailbox folders">
                  <ListItem className={classes.listItemss}>
                    <ListItemIcon>
                      <CallIcon />
                    </ListItemIcon>
                    <ListItemText primary="+44 444444444" />
                  </ListItem>
                  <ListItem className={classes.listItemss}>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Address" />
                  </ListItem>
                  <ListItem className={classes.listItemss}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="solar@gmail.com" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.contactContainer}>
                <Typography variant="h6" className={classes.heading}>
                  Quick Links
                </Typography>
                <div className={classes.linksContainer}>
                  <List component="nav" aria-label="main mailbox folders">
                    <Typography variant="body2" className={classes.linksss}>
                      About
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      Products
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      News
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      Careers
                    </Typography>
                  </List>
                  <List component="nav" aria-label="main mailbox folders">
                    <Typography variant="body2" className={classes.linksss}>
                      Help
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      Installation
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      Installer Panel
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      Privacy
                    </Typography>
                    <Typography variant="body2" className={classes.linksss}>
                      FAQ
                    </Typography>
                  </List>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.socialContaienr}>
                <Grid container>
                  <Grid item xs={4}>
                    <ListItemIcon>
                      <FacebookIcon
                        style={{ color: "#fff", fontSize: "32px" }}
                      />
                    </ListItemIcon>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemIcon>
                      <TwitterIcon
                        style={{ color: "#fff", fontSize: "32px" }}
                      />
                    </ListItemIcon>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemIcon>
                      <InstagramIcon
                        style={{ color: "#fff", fontSize: "32px" }}
                      />
                    </ListItemIcon>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.copyRight}>
          <Typography variant="body1" className={classes.rights}>
            ©All rights reserved
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
