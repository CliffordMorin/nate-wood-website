import React, { useState } from "react";

import useTheme from "@mui/material/styles/useTheme";
import {
  Container,
  Grow,
  Typography,
  Grid,
  useMediaQuery,
  Divider,
  Button,
  Box,
} from "@mui/material";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import NickGuitar from "../../images/NickGuitar.jpeg";
// import martin6small from "../../images/compressed/martin6small.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";

const Guitarist = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Helmet>
        <title>Nicky Wood Website | Guitarist</title>
        <meta
          name="description"
          content="Nick Wood Website. New York City based music producer, mixing, mastering, and recording engineer."
        />
        <link rel="canonical" href="/guitarist" />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl" sx={{ backgroundColor: "#040404", pb: 7 }}>
          <Typography
            variant="h2"
            align="center"
            pt={5}
            gutterBottom
            sx={{ color: theme.palette.text.light }}
          >
            <Bounce>Guitarist</Bounce>
          </Typography>
          <Divider
            sx={{
              zIndex: "100",
              backgroundColor: theme.palette.text.light,
              height: "2px",
              width: "100px",
              margin: "auto",
              mb: 5,
            }}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <LazyLoadImage
                className={classes.images}
                src={NickGuitar}
                effect="blur"
                alt="martin"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                align="center"
                className={classes.text}
                py={isSmallScreen ? 0 : 2}
                px={2}
              >
                Nicky Wood has been a professional guitarist since 2007,
                specializing in jazz, classical, hip-hop and R&B. He is
                currently performing with Tina Carzon
              </Typography>
              <a
                href="https://www.tinacarzon.world/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Button className={classes.button}>Listen Here</Button>
              </a>
              <Typography
                variant="body2"
                align="center"
                className={classes.text}
                p={2}
              >
                Nicky plays piano and bass as well and has been teaching all
                three instruments since 2008. Book your lesson today:
              </Typography>
              <a
                href="https://www.patreon.com/nickywoodmusic"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Button className={classes.button}>Book Lesson Here</Button>
              </a>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Guitarist;
