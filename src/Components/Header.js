import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Badge,
  MenuItem,
  Menu,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Call as CallIcon,
} from "@material-ui/icons";
import appLogo from "../Assets/applogo.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),

    color: "black",
    "&:hover": {
      background: "#FFFFFF",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchInput: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 36px rgba(251, 218, 97, 0.34)",
    borderRadius: "336px",
    // border: "1px solid #FFE925",
    width: "362px",
    "&.MuiFormControl-root div.MuiOutlinedInput-root": {
      borderRadius: "336px",
      border: "1px solid #FFE925",
      paddingRight: 0,
    },
    "&.MuiFormControl-root div.MuiOutlinedInput-root .MuiInputAdornment-root svg":
      {
        background:
          "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
        borderRadius: "336px",
        width: "50px",
        height: "30px",
      },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchInput2: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 36px rgba(251, 218, 97, 0.34)",
    borderRadius: "336px",
    // border: "1px solid #FFE925",
    width: "362px",
    "&.MuiFormControl-root div.MuiOutlinedInput-root": {
      borderRadius: "336px",
      border: "1px solid #FFE925",
      paddingRight: 0,
    },
    "&.MuiFormControl-root div.MuiOutlinedInput-root .MuiInputAdornment-root svg":
      {
        background:
          "linear-gradient(148.54deg, #FFE925 20.91%, #FFAA39 105.47%)",
        borderRadius: "336px",
        width: "50px",
        height: "30px",
      },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      margin: "0 auto",
      marginTop: 10,
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  textPri: {
    "&.MuiListItemText-root .MuiListItemText-primary": {
      color: "black",
      fontSize: "15px",
      color: "#111111",
      fontFamily: "Nunito",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  call: {
    background: "#FBDA61",
    boxShadow: "0px 2px 27px rgba(251, 218, 97, 0.34)",
    borderRadius: "36px",
    [theme.breakpoints.down("sm")]: {
      width: "45px",
      borderRadius: "50%",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ background: "#fff", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <div>
              <img src={appLogo} style={{ width: "50%" }} />
            </div>
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography> */}
            {/* <div style={{ width: "100%", flex: 1 }}> */}
            <div className={classes.grow} />
            <TextField
              id="input-with-icon-textfield"
              //   label="Informationssuche"
              placeholder="Informationssuche"
              variant="outlined"
              size="small"
              className={classes.searchInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      style={{
                        color: "#111111",
                        padding: "5px 0",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            {/* </div> */}
            <div className={classes.grow} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ListItem
                style={{ width: "40%" }}
                onClick={() => history.push("/login")}
              >
                <ListItemIcon style={{ minWidth: "25px", cursor: "pointer" }}>
                  <PersonIcon style={{ fontSize: "18px" }} />
                </ListItemIcon>
                <ListItemText
                  className={classes.textPri}
                  primary="Login"
                  style={{ cursor: "pointer" }}
                />
              </ListItem>
              <ListItem className={classes.call}>
                <ListItemIcon style={{ minWidth: "25px" }}>
                  <CallIcon style={{ fontSize: "18px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={props.callTitle}
                  className={classes.textPri}
                />
              </ListItem>
            </div>

            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                style={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
          <div style={{ textAlign: "center" }}>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Informationssuche"
              variant="outlined"
              size="small"
              className={classes.searchInput2}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      style={{
                        color: "#111111",
                        padding: "5px 0",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
