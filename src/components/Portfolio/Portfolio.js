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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTheme from "@mui/material/styles/useTheme";
import { Bounce } from "react-awesome-reveal";
import audioData from "./audioData";

const Portfolio = () => {
  const classes = makeStyles();
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredAudioData =
    selectedCategory === "all"
      ? Object.values(audioData).flat() // Show all audio files when "All" is selected
      : audioData[selectedCategory] || []; // Use the selected category from the audioData object

  return (
    <Container>
      <Helmet>
        <title>Nicky Wood Music | Portfolio</title>
        <meta name="description" content="Porfolio of Nicky Wood" />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <Typography
        align="center"
        variant="h2"
        sx={{ pt: 5, pb: 2, color: theme.palette.text.light }}
      >
        <Bounce>PORTFOLIO</Bounce>
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
      <Select
        label="Filter by Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        sx={{ backgroundColor: theme.palette.text.light }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="mixing">Mixing</MenuItem>
        <MenuItem value="recording">Recording</MenuItem>
        <MenuItem value="original_music">Original Music</MenuItem>
      </Select>

      <div>
        {filteredAudioData.map((audio, index) => (
          <Card key={index}>
            <CardContent>
              {/* Display audio details here */}
              <h3>{audio.title}</h3>
              <audio controls>
                <source src={audio.src} type="audio/mpeg" />
              </audio>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
