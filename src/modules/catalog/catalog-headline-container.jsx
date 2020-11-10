import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";
import {addItemToBasket as action} from "../../store/basket-items/actions";


export const CatalogHeadlineContainer = () => {
    const dispatch = useDispatch();

    const catalogItems = useSelector((state) => state.basketItems.catalogItems);
    const basketItems = useSelector((state) => state.basketItems.basketItems);

    return (
        <>
            <CatalogHeadline
                basketItemsData={basketItems}
                catalogItemsData={catalogItems}
                addItemToBasket={action}
                dispatch={dispatch}
            />
        </>
    );
};
