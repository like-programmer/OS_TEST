import React, {Fragment} from "react";

import PageHeader from "../page-header/page-header.jsx";
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
        <Fragment>
            <PageHeader
                accessLevel={accessLevel}
            />
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
        </Fragment>
    );
};


export default CatalogPage;
