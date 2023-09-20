import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Technologies from './Technologies';

function Skills({ title, dark, id }) {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`} id={id}>
      <div className={classes.sectionContent} id={id}>
          <Typography variant="h4"> {title} </Typography>
           <Technologies />
      </div>
   </div>
  );
}


const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh"
  },
  sectionDark: {
    background: "#333",
    color: "beige"
  },
  sectionContent:{
    maxWidth: "80vw",
    "& h4":{
      marginLeft: theme.spacing(3)
    }
  }
}));

export default Skills;
