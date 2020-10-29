import React, {Fragment} from "react";
import CatalogPage from "../catalog-page/catalog-page.jsx";
import products from "../../data/products.json";
import PageHeader from "../page-header/page-header";

const App = (props) => {
    return (
        <Fragment>
            <PageHeader/>

            <CatalogPage
        products={products}
        />
        </Fragment>
    );
};


export default App;
