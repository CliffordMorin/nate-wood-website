import { makeStyles } from "@mui/styles";
import nickywood2 from "../../images/nickywood2.jpeg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${nickywood2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${nickywood2})`,
      backgroundPosition: "50%",
      paddingTop: theme.spacing(4),
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  heading: {
    color: theme.palette.text.colorful,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  inputStyle: {
    color: theme.palette.text.black,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.black, // set border color for active state
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.black, // set border color for hover state
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.black, // set border color for focused state
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.black, // set border color for disabled state
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.text.black, // set label color
    },
  },
}));
