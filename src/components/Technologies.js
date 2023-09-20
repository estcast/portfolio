
import React from 'react';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import { Typography, makeStyles, Paper } from '@material-ui/core';
import skills from './skillsArray';

function Technologies(){
  const classes = useStyles();

  return(
    <>
      <Timeline align='left' className={classes.timeLine}>
        {
          skills.map(({year, src, title},index)=> (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant='h6' color="textSecondary">
                  {year}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <img src={src} alt={title} className={classes.customLogo} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {title}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </>
  );
}


const useStyles = makeStyles((theme) => ({
  customLogo:{
    width: "70px",
    height: "60px",
  },
  paper:{
    padding: "15px 15px",
    maxWidth:"320px",
    minWidth:"150px"
  },
  timeLine:{
    marginTop:"10%",
  },
}));

export default Technologies;