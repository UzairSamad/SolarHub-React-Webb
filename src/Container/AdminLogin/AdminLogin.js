import React from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  FormLabel,
  Typography,
  Grid,
  Radio,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginImage from "../../Assets/login.png";
import appLogo from "../../Assets/applogo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  loginBtn: {
    background:
      "linear-gradient(90.01deg, #FFC531 6.25%, #FFCA39 289.13%, #FFDD81 367.84%, rgba(255, 243, 202, 0) 478.53%)",
    borderRadius: "5px",
    marginTop: "10px",
    fontFamily: "Nunito",
    fontSize: "16px",
    textTransform: "none",
  },
  labels: {
    color: "#111111",
    fontSize: "16px",
    fontFamily: "Nunito",
  },
  links: {
    textDecoration: "none",
    color: "#111111",
    fontSize: "15px",
    fontFamily: "Nunito",
  },
  heading: {
    fontFamily: "Nunito",
    fontSize: "29px",
    fontWeight: 600,
    color: "#111111",
  },
  radioLabel: {
    cursor: "default",
    "&.MuiFormControlLabel-root .MuiTypography-root": {
      color: "#111111",
      fontSize: "15px",
      fontFamily: "Nunito",
    },
  },
}));

const AdminLogin = () => {
  const classes = useStyles();
  const [rememberMe, setRememberMe] = React.useState("");

  const history = useHistory();

  const handleChange = (event) => {
    setRememberMe(event.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div style={{ width: "100%", textAlign: "end", padding: "20px" }}>
          <img src={appLogo} style={{ width: "100px" }} />
        </div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.heading}>
            Admin Panel Login
          </Typography>
          <Container maxWidth="xs">
            <div style={{ marginTop: "30px" }}>
              <FormLabel component="legend" className={classes.labels}>
                Email
              </FormLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email"
                name="email"
                autoComplete="email"
                autoFocus
                style={{ marginBottom: "20px" }}
              />
              <FormLabel component="legend" className={classes.labels}>
                Password
              </FormLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            /> */}
              <div style={{ marginTop: "10px" }}>
                <Grid container>
                  <Grid item xs>
                    <FormControlLabel
                      value={rememberMe}
                      control={<Radio style={{ color: "#FFCA39" }} />}
                      onChange={handleChange}
                      label="Anmeldung speichern"
                      className={classes.radioLabel}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: "10px" }}>
                    <Link to="#" variant="body2" className={classes.links}>
                      Password vergessen?
                    </Link>
                  </Grid>
                </Grid>
              </div>
              <Button
                fullWidth
                variant="contained"
                className={classes.loginBtn}
              >
                Jetzt anmelden
              </Button>
            </div>
          </Container>
        </div>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;
