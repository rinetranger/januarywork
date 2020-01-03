import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Paper, RadioGroup, GridSpacing, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import clsx from 'clsx';
import { INews } from 'src/reducers';
import { IMainState, IMainAction } from 'src/containers/main';


type IState = {}
type IProps = IMainState & IMainAction

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height: 300,
    },
    control: {
      padding: theme.spacing(2),
    },
    inline: {
        display: 'inline',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      rounded: {
        color: '#fff',
        backgroundColor: green[500],
      },
  }),
);

const Main: React.FC<IProps> = (props) => {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
    };

    return(
        <Container fixed>

            <ReactPlayer style={{width: '100%'}} url='https://www.youtube.com/watch?v=a1u0IqVxN9k' />

            <Typography variant="h4" >Vasko Vassilev </Typography>
            <Typography variant="h4" >Royal Opera House Concert Master</Typography>
            
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} >
                                <Typography variant="h5">
                                        News
                                </Typography> 
                                <List>
                                {props.newsList.map((news: INews) => (
                                     <ListItem alignItems="flex-start">
                                     <ListItemAvatar>
                                       <Avatar className={clsx(classes.square, classes.large)} alt={news.title} src={news.img} />
                                     </ListItemAvatar>
                                     <ListItemText
                                       primary={news.title}
                                       secondary={
                                         <>
                                           <Typography
                                             variant="body2"
                                             className={classes.inline}
                                             color="textPrimary"
                                           >
                                             {news.content}
                                           </Typography>
                                           <Typography
                                             variant="body2"
                                             className={classes.inline}
                                             color="textSecondary"
                                           >
                                           - at {news.place}
                                           </Typography>
                                         </>
                                       }
                                     />
                                   </ListItem>
                                    
                                ))}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} >
                                <Typography variant="subtitle1">
                                        Concert
                                </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper} >
                                <Typography variant="subtitle1">
                                        Information
                                </Typography> 
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main