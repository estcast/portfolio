import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@material-ui/core";
import logo from "../images/logo_generic.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiMenu, BiXCircle } from "react-icons/bi";
import links from './Links';


function Navbar() {

  const [open, setOpen] = useState(false);
  //const [menu, setMenu] = useState(false);
  const classes = useStyles();

  /*
  const toggleMenu = () => {
    setMenu(!menu);
  };
*/
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img onClick={scrollToTop} src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
            {
              links.map(({id, text}, index)=>(
                <Link 
                  key={index}
                  to={id}
                  spy={true}
                  activeClass='active'
                  smooth={true}
                  duration={500}
                  offset={-80}>
                  {text}
                </Link>
              ))
            }
          </List>
          <IconButton className={classes.menuButton} onClick={() => setOpen(true)}>
            <BiMenu />
          </IconButton>
        </Toolbar>
     </AppBar>
     <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)} className={classes.cancelIcon}>
          <BiXCircle />
        </IconButton>
        <Divider />
        {
          links.map(({id, text, icon}, index)=>(
            <Link 
              key={index}
              className={classes.sideBar}
              to={id}
              spy={true}
              activeClass='active'
              smooth={true}
              duration={500}
              offset={-80}>
              <ListItem component="h5"> 
                <span>
                  <ListItemIcon className={classes.icon}>
                    {icon}
                  </ListItemIcon>
                </span>
                {text}
              </ListItem>
            </Link>
          ))
        }
     </Drawer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({

  root:{
    position:"sticky",
    backgroundColor:"beige",
    top: 0,
    left:0,
    right:0
  },

  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },

  logo:{
    height: "5rem",
    objectFit: "contain",
    "&:hover":{
      cursor:"pointer"
    }
  },

  menu:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    },
    "& a":{
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover":{
      cursor:"pointer",
      color:"tomato",
      borderBottom: "3px solid tomato"
    }
  },

  menuButton:{
    display:"none",
    edge:"end",
    fontSize:"35px",
    [theme.breakpoints.down("sm")]:{
      display:"block",
      color:"tomato",
      position:"absolute",
      top:0,
      right:10
    }
  },

  sideBar:{
    width:"40vw",
    [theme.breakpoints.down("sm")]:{
      width:"65vw"
    },
    "& h5":{
      margin: theme.spacing(10, 0, 0, 4),
      fontSize:"1.4rem",
      color:"#333",
      fontWeight:"bold"
    },
    "& h5:hover":{
      color:"tomato",
      cursor:"pointer"
    }
  },

  icon:{
    fontSize:"1.9rem"
  },

  cancelIcon:{
    fontSize:"2.5rem",
    color:"tomato",
    position:"absolute",
    top:0,
    right:10
  }


}));

export default Navbar;
