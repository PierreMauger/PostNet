import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './post.css'

type Postprops = {
    imgProfileURL: string
    profileName: string
    profileID: number
    postTitle?: string
    postDate: string
    imgPostUrl?: string
    postMessage?: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 800,
            backgroundColor: "#d3e0ea",
            flexGrow: 0,
            margin: 'auto',
            marginTop: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        textMessage: {
            fontFamily: 'Merriweather Sans',
        }
    }),
);

export default function Post(props: Postprops) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar alt="" src={props.imgProfileURL} />}
                title={props.profileName}
                subheader={props.postDate}
            />
            <CardMedia
                className={classes.media}
                image={props.imgPostUrl}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.textMessage}>{props.postMessage}</Typography>
            </CardContent>
        </Card>
    );
}