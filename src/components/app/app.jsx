import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import CatalogPage from "../catalog-page/catalog-page.jsx";
import FormPage from "../formPage/formPage.jsx";

const App = (props) => {
    const {
        products,
        accessLevel,
        onFormSubmit
    } = props;
    return (
        <FormPage
            products={products}
            accessLevel={accessLevel}
            onFormSubmit={onFormSubmit}
        />
    );
};


const mapStateToProps = (state) => ({
    products: state.products,
    accessLevel: state.accessLevel,
});

const mapDispatchToProps = (dispatch) => ({
    onFormSubmit(sortType) {
        dispatch(ActionCreator.addProduct(sortType));
    },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

