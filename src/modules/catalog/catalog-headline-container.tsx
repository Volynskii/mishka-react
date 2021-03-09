import React from "react";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";
import {useCatalogHeadline} from "./useCatalogHeadline";

export const CatalogHeadlineContainer = () => {

    const {catalogItems,basketItems} = useCatalogHeadline();

    return (
        <>
            <CatalogHeadline
                basketItemsData={basketItems}
                catalogItemsData={catalogItems}
            />
        </>
    );
};
