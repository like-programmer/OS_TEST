import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import MainNav from "../main-nav/main-nav.jsx";
import {Container, Grid, Toolbar, Typography, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import logoSrc from '../../img/logo.svg';
import {AppRoute} from "../../const.js";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: `space-between`,
        flexWrap: 'wrap',
        padding: 0,
    },
    roleText: {
        marginLeft: `auto`,
        marginRight: theme.spacing(3),
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));


const PageHeader = (props) => {
    const {accessLevel} = props;

    const classes = useStyles();

    return (
        <Grid>
            <AppBar position="static" color="primary" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                        <Link to={AppRoute.ROOT}>
                            <img src={logoSrc} width={40}/>
                        </Link>

                        <Typography component="h2" variant="h6" className={classes.roleText}>
                            Role: {accessLevel}
                        </Typography>

                        <MainNav
                            accessLevel={accessLevel}
                        />

                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    );
};

PageHeader.propTypes = {
    accessLevel: PropTypes.string.isRequired,
};


export default PageHeader;
