import React, {Fragment} from "react";
import CatalogPage from "../catalog-page/catalog-page.jsx";
import PageHeader from "../page-header/page-header";

const App = (props) => {
    const {products} = props;
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
