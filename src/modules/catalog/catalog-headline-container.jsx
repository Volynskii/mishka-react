import React from "react";
import {useSelector} from "react-redux";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";

export const CatalogHeadlineContainer = () => {

    const catalogItems = useSelector((state) => state.basketItems.catalogItems);
    const basketItems = useSelector((state) => state.basketItems.basketItems);

    return (
        <>
            <CatalogHeadline
                basketItemsData={basketItems}
                catalogItemsData={catalogItems}
            />
        </>
    );
};
