import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface IState {}
interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Main: React.FC<IProps> = () => {

    const classes = useStyles();
        return(
            <div className={classes.root}>
            <AppBar className={classes.appBar} color="default" position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Boigraphy
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Discography
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          </div>
        )
}

export default Main