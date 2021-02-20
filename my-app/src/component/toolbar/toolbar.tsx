import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './toolbar.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: '#534e52',
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: '#f2d974',
        },
        title: {
            flexGrow: 1,
            fontSize: 40,
            fontFamily: 'Faster One',
            color: '#f2d974',
        },
        loginIcon: {
            fontFamily: 'Faster One',
            color: '#f2d974',
            fontSize: 20,
        }
    }),
);

type toolBarProps = {
    appTitle: string
}

export default function ToolBar(props: toolBarProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>{props.appTitle}</Typography>
                    <Button className={classes.loginIcon}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
