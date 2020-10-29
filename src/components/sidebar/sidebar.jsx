import React from "react";
import {Grid, Typography, Button, Paper, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        padding: 12,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 12,
        background: `rgba(255, 0, 0, 0.1)`,
    },
    sidebarSectionDivider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));


const Sidebar = (props) => {
    const {products} = props;
    const classes = useStyles();

    const returnTotalSum = () => {
        let sum = 0;
        products.map((product) => sum += product.price);
        return sum.toFixed(2);
    };

    const returnAvgPrice = () => {
        let sum = returnTotalSum();
        return (sum / products.length).toFixed(2);
    };

    return (
        <Grid item xs={12} sm={6} md={3} >
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

                <Divider className={classes.sidebarSectionDivider}/>

                <Grid>
                    <Button variant="contained" color="secondary">Delete all</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};


export default Sidebar;
