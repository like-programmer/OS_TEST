import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import CatalogPage from "../catalog-page/catalog-page.jsx";
import FormPage from "../formPage/formPage.jsx";
import BanPage from "../ban-page/ban-page.jsx";
import {AppRoute} from "../../const.js";

const App = (props) => {
    const {
        products,
        accessLevel,
        onProductDeleteBtnClick,
        onDeleteAllBtnClick,
    } = props;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AppRoute.ROOT}>
                    <CatalogPage
                        products={products}
                        accessLevel={accessLevel}
                        onProductDeleteBtnClick={onProductDeleteBtnClick}
                        onDeleteAllBtnClick={onDeleteAllBtnClick}
                    />
                </Route>
                <Route exact path={AppRoute.ADD_NEW}>
                    <FormPage
                        products={products}
                        accessLevel={accessLevel}
                        onDeleteAllBtnClick={onDeleteAllBtnClick}
                    />
                </Route>
                <Route exact path={AppRoute.ACCESS_DENIED}>
                    <BanPage
                        products={products}
                        accessLevel={accessLevel}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

App.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    accessLevel: PropTypes.string.isRequired,
    onProductDeleteBtnClick: PropTypes.func.isRequired,
    onDeleteAllBtnClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
    products: state.products,
    accessLevel: state.accessLevel,
});

const mapDispatchToProps = (dispatch) => ({
    onProductDeleteBtnClick(id) {
        dispatch(ActionCreator.deleteProduct(id));
    },
    onDeleteAllBtnClick() {
        dispatch(ActionCreator.deleteAll());
    },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

