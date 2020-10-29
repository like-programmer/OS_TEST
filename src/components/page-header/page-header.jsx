import React from "react";

import {Container, Grid, Toolbar, Typography, IconButton, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";
import logoSrc from '../../img/logo.svg';

const useStyles = makeStyles((theme) => ({
    appBar: {
        // borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        justifyContent: `space-between`,
        flexWrap: 'wrap',
        padding: 0,
    },
    toolbarLogo: {
        display: `flex`,
        alignItems: `center`,
    },
    roleText: {
        marginLeft: `auto`,
        marginRight: theme.spacing(3),
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },

    menuIcon: {
        color: `#ffffff`,
    }
}));


const PageHeader = (props) => {
    const {accessLevel} = props;
    const classes = useStyles();

    return (
        <Grid>
            <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="textPrimary" noWrap className={classes.toolbarLogo}>
                            <img src={logoSrc} width={40}/>
                        </Typography>

                        <Typography component="h2" variant="h6" className={classes.roleText}>Role: {accessLevel}</Typography>

                        <IconButton aria-label="menu" className={classes.menuIcon}>
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    );
};


export default PageHeader;
