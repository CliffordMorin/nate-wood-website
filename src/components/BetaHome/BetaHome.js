import React, { useState, useEffect } from "react";
import {
  Container,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  Slide,
  Typography,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { TbVinyl } from "react-icons/tb";
import { GiGuitarHead } from "react-icons/gi";
import { RxMixerVertical } from "react-icons/rx";
import useTheme from "@mui/material/styles/useTheme";
import { Fade } from "react-awesome-reveal";
import makeStyles from "./styles";
import { Helmet } from "react-helmet-async";
// import { ReactComponent as LogoLarge } from "../../images/logoLarge.svg";\
// import logo from "../../images/logo.svg";
// import nickywood5 from "../../images/nickywood5.jpeg";

const BetaHome = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = makeStyles();
  // const [open, setOpen] = useState(true);

  // const TransitionDown = (props) => {
  //   return <Slide {...props} direction="down" />;
  // };
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   setOpen(true);
  // }, []);
  return (
    <Container
      className={classes.container}
      sx={{
        [theme.breakpoints.down("sm")]: {
          ml: 0,
          pl: 0,
        },
      }}
      maxWidth={isSmallScreen ? "sm" : "xl"}
    >
      <Helmet>
        <title>Nicky Wood Music | Home</title>
        <meta name="description" content="Home Page" />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="info"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>
            Website Under Construction Coming Soon! For Inquires Please Contact
            nickywoodmusic@gmail.com
          </Typography>
        </Alert>
      </Snackbar> */}
      <Container
        className={classes.textContainer}
        maxWidth={isSmallScreen ? "sm" : "lg"}
      >
        <Fade delay="100">
          <Link to="/guitarist" className={classes.link}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.black }}
              className={classes.text}
            >
              <Avatar className={classes.avatar}>
                <GiGuitarHead size={70} color={theme.palette.text.black} />
              </Avatar>
              <div className={classes.innerText}>GUITARIST</div>
            </Typography>
          </Link>
        </Fade>

        <Fade delay="150">
          <Link to="/portfolio" className={classes.link}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.black }}
              className={classes.text}
            >
              <Avatar className={classes.avatar}>
                <TbVinyl size={70} color={theme.palette.text.black} />
              </Avatar>

              <div className={classes.innerText}>MUSIC PRODUCTION</div>
            </Typography>
          </Link>
        </Fade>

        <Fade delay="200">
          <Link to="/portfolio" className={classes.link}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.black }}
              className={classes.text}
            >
              <Avatar alt="Nicky Wood" className={classes.avatar}>
                <RxMixerVertical
                  size={70}
                  alt="mixing"
                  color={theme.palette.text.black}
                />
              </Avatar>
              <div className={classes.innerText}>SOUND ENGINEERING</div>
            </Typography>
          </Link>
        </Fade>
      </Container>
      {/* <Container maxWidth="xl">
        <img src={nickywood5} alt="" className={classes.homeImg} />
      </Container> */}
    </Container>
  );
};

export default BetaHome;
