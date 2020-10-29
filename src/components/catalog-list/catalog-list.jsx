import React from "react";
import ProductCard from "../product-card/product-card";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    catalogGrid: {
        alignItems: `flex-start`,
    },
    test: {
        [theme.breakpoints.down(`sm`)]: {
            marginBottom: theme.spacing(4),
        },

        background: `rgba(255, 0, 0, 0.2)`,
    }
}));


const CatalogList = (props) => {
    const {products} = props;
    const classes = useStyles();

    return (
        <Grid className={classes.test} item xs={12} md={8}>
            <Grid className={`${classes.catalogGrid} ${classes.test}`} container spacing={3}>
                {products.map((product, i) => (
                    <ProductCard
                        key={`${product}-${i}`}
                        product={product}
                    />
                ))}
            </Grid>
        </Grid>
    );
};


export default CatalogList;
