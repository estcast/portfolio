
import React from 'react';
import { makeStyles, Paper, TextField, Typography, Button } from "@material-ui/core";

function Contact({title, dark, id}){
  const classes = useStyles();

  return(
    <div className={`${classes.section} ${dark && classes.sectionDark}`} id={id}>
        <div className={classes.sectionContent} id={id}>
          <Typography variant="h3"> {title} </Typography>
          <Paper className={classes.root}>
            <div className={classes.title}>
              <Typography variant="h5"> Contact me </Typography>
            </div>
            <form className={classes.form} autoComplete="off">
              <TextField label="Your name" />
              <TextField label="Your e-mail" />
              <TextField label="Write a message" />
            </form>
            <Button variant="contained">Submit</Button>
            <br/>
            <Typography variante="h1">
              Since this page is static,
               this form is just for example. Contact me at cesteban9513@gmail.com
            </Typography>
          </Paper>
        </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  sectionDark: {
    background: "#333",
    color: "beige",
  },
  root:{
    marginTop:theme.spacing(3),
    backgroundColor: "tomato",
    color: "#fff",
    maxWidth:"500px",
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-between",
    padding: theme.spacing(3),
    borderRadius: "10px",
    "& button":{
      backgroundColor:"beige",
      color:"tomato",
      fontWeight:900,
      fontSize:"1.2rem",
      marginTop: theme.spacing(2)
    }
  },
  sectionContent:{
    maxWidth:"80vw",
  },
 
  form:{
    display: "flex",
    flexDirection: "column",
    "& input":{
      marginBottom: theme.spacing(1)
    },
    "& input[type=text]":{
      fontSize: "1.5rem",
      color:"beige"
    }
  }
}));

export default Contact;