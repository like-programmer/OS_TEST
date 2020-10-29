import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import PageHeader from "../page-header/page-header.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        justifyContent: `space-between`,
        alignItems: `flex-start`,
        marginTop: theme.spacing(3),
    },
    formContainer: {
        [theme.breakpoints.down(`sm`)]: {
            marginBottom: theme.spacing(4),
        },
    },
    formTitle: {
        marginBottom: theme.spacing(4),
    },
    banParagraph: {
        marginTop: theme.spacing(4),
    }
}));

const BanPage = (props) => {
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

                        <Grid className={classes.formContainer} item xs={12} md={8}>
                            <Typography className={classes.formTitle} gutterBottom component="h1" variant="h4"
                                        align="center">Permission denied</Typography>

                            <Divider className={classes.sidebarSectionDivider}/>
                            <Typography className={classes.banParagraph} gutterBottom component="p" variant="h6"
                                        align="center">You don't have sufficient rights to view this
                                content.</Typography>

                            {/*<Typography className={classes.banParagraph} gutterBottom component="p" variant="h6"*/}
                                        {/*align="center">Return to the*/}
                                {/*{<Link to={`/`}> Main</Link>}*/}
                                {/*.</Typography>*/}
                        </Grid>

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


export default BanPage;
