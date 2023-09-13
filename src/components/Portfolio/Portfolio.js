import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Divider,
  Select,
  MenuItem,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTheme from "@mui/material/styles/useTheme";
import { Bounce } from "react-awesome-reveal";
import audioData from "./audioData";
import backgroundImg from "../../images//nickywood12.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  statement: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  audioTitle: {
    marginTop: theme.spacing(2),
  },
  backgroundImage: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Optional: Fixed background
    minHeight: "100vh", // Ensures the background covers the entire viewport height
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "75%",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState("mixing");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredAudioData =
    selectedCategory === "all"
      ? Object.values(audioData).flat() // Show all audio files when "All" is selected
      : audioData[selectedCategory] || []; // Use the selected category from the audioData object

  return (
    <Container className={classes.backgroundImage}>
      <Helmet>
        <title>Nicky Wood Music | Portfolio</title>
        <meta name="description" content="Portfolio of Nicky Wood" />
        <link rel="canonical" href="/portfolio" />
      </Helmet>

      {/* Header */}
      <Box className={classes.header}>
        <Typography variant="h2" gutterBottom>
          <Bounce>PORTFOLIO</Bounce>
        </Typography>
        <Divider
          sx={{
            backgroundColor: theme.palette.common.white,
            height: "2px",
            width: "100px",
            margin: "auto",
            mb: 2,
          }}
        />
        <Typography variant="body1">
          Your gateway to exceptional audio production services.
        </Typography>
        <Typography variant="body1">Checkout some of my work below.</Typography>
      </Box>

      {/* Professional Statement
      <Card className={classes.statement}>
        <CardContent>
          <Typography variant="body1">
            Your music deserves nothing less than the highest quality, and I am
            here to make that vision a reality.
          </Typography>
        </CardContent>
      </Card> */}

      {/* Category Filter */}
      <Select
        label="Filter by Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        sx={{ backgroundColor: theme.palette.text.light, marginTop: 4 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="mixing">Mixing</MenuItem>
        <MenuItem value="recording">Recording</MenuItem>
        <MenuItem value="originals">Original Music</MenuItem>
      </Select>

      {/* Audio Cards */}
      <div className={classes.cardContainer}>
        {filteredAudioData.map((audio, index) => (
          <Card key={index} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <audio controls>
                <source src={audio.src} type="audio/mpeg" />
              </audio>
              <Typography variant="subtitle1" className={classes.audioTitle}>
                {audio.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
