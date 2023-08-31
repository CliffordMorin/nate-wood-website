import React, { useState, useEffect } from "react";
import {
  Container,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TbVinyl } from "react-icons/tb";
import { GiGuitarHead } from "react-icons/gi";
import { RxMixerVertical } from "react-icons/rx";
import useTheme from "@mui/material/styles/useTheme";
import { Fade } from "react-awesome-reveal";
import makeStyles from "./styles";
import { Helmet } from "react-helmet-async";
// import { ReactComponent as LogoLarge } from "../../images/logoLarge.svg";\
import logo from "../../images/logo.svg";

const BetaHome = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = makeStyles();
  const [open, setOpen] = useState(true);

  const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);
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
      <Snackbar
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
            Website Under Construction Coming Soon!
          </Typography>
        </Alert>
      </Snackbar>
      <Container
        className={classes.textContainer}
        maxWidth={isSmallScreen ? "sm" : "lg"}
      >
        <Fade delay="100">
          <Typography variant="h4" sx={{ color: theme.palette.text.light }}>
            <GiGuitarHead size={50} color={theme.palette.secondary.main} />
            GUITARIST
          </Typography>
        </Fade>
        <Fade delay="150">
          <Typography variant="h4" sx={{ color: theme.palette.text.light }}>
            <TbVinyl size={50} color={theme.palette.secondary.main} />
            MUSIC PRODUCTION
          </Typography>
        </Fade>
        <Fade delay="200">
          <Typography variant="h4" sx={{ color: theme.palette.text.light }}>
            <RxMixerVertical size={50} color={theme.palette.secondary.main} />
            SOUND ENGINEERING
          </Typography>
        </Fade>
      </Container>
    </Container>
  );
};

export default BetaHome;
