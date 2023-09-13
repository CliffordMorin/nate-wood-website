import { makeStyles } from "@mui/styles";
import nickywood5 from "../../images/nickywood5.jpeg";

export default makeStyles((theme) => ({
  homeImg: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    objectPosition: "50% 10%",
    [theme.breakpoints.down("sm")]: {
      objectPosition: "50%",
    },
  },

  container: {
    backgroundImage: `url(${nickywood5})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "50%",
    },
  },
  logo: {
    marginLeft: "0",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  divider: {
    backgroundColor: theme.palette.text.dark,
    width: "40%",
    height: "3px",
    margin: "20px auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      ml: 0,
    },
  },
  avatar: {
    backgroundColor: theme.palette.text.colorfulHover,
    height: "90px",
    width: "90px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {},
  },
  text: {
    fontSize: "1.2rem", // Adjusted font size for better fit
    fontWeight: "bold",

    margin: theme.spacing(2),
    cursor: "pointer",
    transition: "transform 0.2s, opacity 0.2s",
    "&:hover, &:active": {
      transform: "scale(1.1)",
      opacity: 0.8,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  innerText: {
    fontSize: "1.2rem", // Adjusted font size for better fit
    fontWeight: "bold",
    backgroundColor: "rgba(242, 63, 8, 0.8)",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    gap: "20px", // Adjust the gap between icon and text as needed
    paddingTop: "20px", // Adjusted padding for better fit

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Align items in a row for mobile
      alignItems: "center", // Align items to the center horizontally for mobile
      width: "25%",
      height: "100%", // Occupy the full height of the screen

      gap: "20px", // Adjust the gap between avatar and text for mobile
      justifyContent: "space-evenly", // Align items to the center vertically for mobile
      padding: "0 20px 20px 20px", // Adjusted padding for better fit
      marginLeft: "10px",
      "& span": {
        fontSize: "1.8rem", // Adjusted font size for smaller screens
      },
      "& h5": {
        fontSize: "1.2rem", // Adjusted font size for smaller screens
      },
      "& h6": {
        fontSize: "1.2rem", // Adjusted font size for smaller screens
      },
    },
  },
}));
