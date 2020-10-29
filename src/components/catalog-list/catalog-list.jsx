import React from "react";
import ProductCard from "../product-card/product-card";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    catalogGrid: {
        alignItems: `flex-start`,
    },
    catalogList: {
        [theme.breakpoints.down(`sm`)]: {
            marginBottom: theme.spacing(4),
        },
    }
}));


const CatalogList = (props) => {
    const {
        products,
        accessLevel,
        onProductDeleteBtnClick,
    } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.catalogList} item xs={12} md={8}>
            <Grid className={`${classes.catalogGrid} ${classes.test}`} container spacing={3}>
                {products.map((product, i) => (
                    <ProductCard
                        key={`${product}-${i}`}
                        product={product}
                        accessLevel={accessLevel}
                        onDeleteBtnClick={onProductDeleteBtnClick}
                    />
                ))}
            </Grid>
        </Grid>
    );
};


export default CatalogList;
