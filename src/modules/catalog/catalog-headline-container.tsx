import React from "react";
import {useSelector} from "react-redux";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";
import {rootReducer} from "../../store/reducer";

export const CatalogHeadlineContainer = () => {

    const catalogItems = useSelector((state: rootReducer) => state.basketItems.catalogItems);
    const basketItems = useSelector((state: rootReducer) => state.basketItems.basketItems);

    return (
        <>
            <CatalogHeadline
                basketItemsData={basketItems}
                catalogItemsData={catalogItems}
            />
        </>
    );
};
