import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";
import {addItemToBasket as action} from "../../store/basket-items/actions";


export const CatalogHeadlineContainer = () => {
    const dispatch = useDispatch();
    const addItemToBasket = useCallback(
        () => dispatch(action),[dispatch]
    );
    const catalogItems = useSelector((state) => state.basketItems.catalogItems);
    const basketItems = useSelector((state) => state.basketItems.basketItems);
    console.log()
    return (
        <>
            <CatalogHeadline
                basketItemsData={basketItems}
                catalogItemsData={catalogItems}
                addItemToBasket={addItemToBasket}
                dispatch={dispatch}
                useCallback={useCallback}
                action={action}
            />
        </>
    );

};
