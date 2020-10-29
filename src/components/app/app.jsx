import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import CatalogPage from "../catalog-page/catalog-page.jsx";
import PageHeader from "../page-header/page-header";

const App = (props) => {
    const {
        products,
        accessLevel,
    } = props;
    return (
        <Fragment>
            <PageHeader
                accessLevel={accessLevel}
            />

            <CatalogPage
                products={products}
                accessLevel={accessLevel}
            />
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    products: state.products,
    accessLevel: state.accessLevel,
});

const mapDispatchToProps = (dispatch) => ({});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

