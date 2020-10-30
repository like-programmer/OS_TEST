import React, {Fragment} from "react";

import PageHeader from "../page-header/page-header.jsx";
import AddingForm from "../addingForm/addingForm.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import withAddingForm from "../../hocs/with-adding-form.js";
const AddingFormWrapped = withAddingForm(AddingForm);

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        justifyContent: `space-between`,
        alignItems: `flex-start`,
        marginTop: theme.spacing(3),
    },
}));

const FormPage = (props) => {
    const {
        products,
        accessLevel,
        onDeleteAllBtnClick
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

                        <AddingFormWrapped/>

                        <Sidebar
                            products={products}
                            accessLevel={accessLevel}
                            onDeleteAllBtnClick={onDeleteAllBtnClick}
                        />
                    </Grid>
                </main>
            </Container>
        </Fragment>
    );
};


export default FormPage;
