import React from "react";
import { Card, makeStyles, Typography, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import profile from '../images/profile.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
import cv from '../images/cv.pdf';


function About({ title, dark, id }) {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant="h3"> {title} </Typography>
        <Card className={classes.card}>
          <CardMedia image={profile} className={classes.media} title={"profile_picture"} />
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect 
              text="Hello, I am Esteban Castro Umana"
              textStyle={{fontSize: "2rem", fontWeight: "700px", color:"tomato"}}
              startDelay={500}
              cursorColor="black"
              typeSpeed={100}   
            />
            <TypeWriterEffect 
              text="I am a Systems' Engineer student"
              textStyle={{fontSize: "1.2rem", fontWeight: "500px", color:"black"}}
              startDelay={3500}
              cursorColor="black"
              typeSpeed={100}   
            />
            <Typography variant="h6" color="textSecondary">
              Welcome to my web portfolio, check my projects and skills.
              Thanks for your time.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" 
              className={classes.pdfButton}>
              <a href={cv} download>
              Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
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
    margin: "0 auto"
  },

  card:{
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
    [theme.breakpoints.down("sm")]:{
      
    }
    
  },

  media:{
    width:"50vh",
    height:"auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      margin:"0px",
      borderRadius: "0px",
    }
  },

  cardContent:{
    marginTop: theme.spacing(2),
    "& h6":{
      marginTop: theme.spacing(2)
    }
  },

  pdfButton:{
    position:"absolute",
    bottom:"1rem",
    right:"1rem",
    backgroundColor:"tomato",
    [theme.breakpoints.down("sm")]:{
      padding:theme.spacing(1)
    },
    padding:theme.spacing(3),
    "&:hover":{
      backgroundColor:"#fff"
    },
    "& a":{
      color:"#fff",
      textDecoration: "none",
      fontWeight:900
    },

    "& a:hover":{
      color:"tomato"
    }
  }

}));

export default About;
