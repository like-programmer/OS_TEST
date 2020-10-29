import React, {Fragment} from "react";
import {Grid, Typography, Button, Paper, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {UserRole} from "../../const.js";

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        padding: 12,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 12,
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            padding: theme.spacing(3),
        },
    },
    sidebarSectionDivider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));


const Sidebar = (props) => {
    const {
        products,
        accessLevel,
        onDeleteAllBtnClick,
    } = props;
    const classes = useStyles();

    const returnTotalSum = () => {
        let sum = 0;
        products.map((product) => sum += product.price);
        return sum.toFixed(2);
    };

    const returnAvgPrice = () => {
        const sum = returnTotalSum();
        const isNumber = (sum / products.length).toFixed(2) !== "NaN";

        return isNumber ? (sum / products.length).toFixed(2) : sum;
    };

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Paper variant="outlined" className={classes.sidebarContainer}>
                <Grid>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Total products amount
                    </Typography>
                    <Typography component="p" variant="h4">{products.length}</Typography>
                </Grid>

                <Divider className={classes.sidebarSectionDivider}/>

                <Grid>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Sum of product prices
                    </Typography>
                    <Typography component="p" variant="h4">{`$${returnTotalSum()}`}</Typography>
                </Grid>

                <Divider className={classes.sidebarSectionDivider}/>

                <Grid>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Average price
                    </Typography>
                    <Typography component="p" variant="h4">{`$${returnAvgPrice()}`}</Typography>
                </Grid>

                {accessLevel === UserRole.ADMIN &&
                <Fragment>
                    <Divider className={classes.sidebarSectionDivider}/>

                    <Grid>
                        <Button variant="contained" color="secondary"
                        onClick={onDeleteAllBtnClick}
                        >
                            Delete all
                        </Button>
                    </Grid>
                </Fragment>
                }
            </Paper>
        </Grid>
    );
};


export default Sidebar;
