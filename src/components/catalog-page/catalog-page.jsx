import React from "react";

import CatalogList from "../catalog-list/catalog-list.jsx";
import Sidebar from "../sidebar/sidebar.jsx";

import {Grid, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        justifyContent: `space-between`,
        alignItems: `flex-start`,
        marginTop: theme.spacing(3),
    },
}));

const CatalogPage = (props) => {
    const {
        products,
        accessLevel,
    } = props;
    const classes = useStyles();

    return (
            <Container maxWidth="lg">
                <main>
                    <Grid container className={classes.mainGrid}>

                        <CatalogList
                            products={products}
                            accessLevel={accessLevel}
                        />

                        <Sidebar
                            products={products}
                            accessLevel={accessLevel}
                        />
                    </Grid>
                </main>
            </Container>
    );
};


export default CatalogPage;
