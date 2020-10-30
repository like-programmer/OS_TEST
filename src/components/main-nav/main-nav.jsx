import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {AppRoute, UserRole} from "../../const";

const useStyles = makeStyles(() => ({
    menuIcon: {
        color: `#ffffff`,
    },
    navLink: {
        color: `inherit`,
        textDecoration: `inherit`,
        fontSize: `inherit`,
        fontFamily: `inherit`,
        fontWeight: `inherit`,
        lineHeight: `inherit`,
        letterSpacing: `inherit`
    }
}));


const MainNav = (props) => {
    const {accessLevel} = props;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton aria-label="menu"
                        className={classes.menuIcon}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose}>
                    <Link to={AppRoute.ROOT}
                    className={classes.navLink}>Catalog</Link>
                </MenuItem>


                <MenuItem onClick={handleClose}>
                    <Link to={accessLevel === UserRole.ADMIN ? AppRoute.ADD_NEW : AppRoute.ACCESS_DENIED}
                    className={classes.navLink}>
                        Add product
                    </Link>
                </MenuItem>


            </Menu>
        </Fragment>
    );
};

MainNav.propTypes = {
    accessLevel: PropTypes.string.isRequired,
};

export default MainNav;
