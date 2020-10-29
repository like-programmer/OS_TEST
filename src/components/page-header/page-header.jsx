import React from "react";
import {Link} from "react-router-dom";

import {Container, Grid, Toolbar, Typography, IconButton, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";
import logoSrc from '../../img/logo.svg';
import {UserRole, AppRoute} from "../../const.js";

const useStyles = makeStyles((theme) => ({
    appBar: {
        // borderBottom: `1px solid ${theme.palette.divider}`,
    },
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
                        <Link to={AppRoute.ROOT}>
                            <img src={logoSrc} width={40}/>
                        </Link>

                        <Typography component="h2" variant="h6"
                                    className={classes.roleText}>Role: {accessLevel}</Typography>

                        <IconButton aria-label="menu" className={classes.menuIcon}>
                            <MenuIcon/>
                        </IconButton>

                        {/*<Link*/}
                            {/*to={accessLevel === UserRole.ADMIN ? AppRoute.ADD_NEW : AppRoute.ACCESS_DENIED}*/}
                        {/*>*/}
                            {/*<IconButton aria-label="clear" className={classes.menuIcon}>*/}
                                {/*<ClearIcon/>*/}
                            {/*</IconButton>*/}
                        {/*</Link>*/}
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    );
};


export default PageHeader;
