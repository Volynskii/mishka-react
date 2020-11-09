import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CatalogHeadline} from "./catalog-headline/catalog-headline";
import {addItemToBasket as action} from "../../store/basket-items/actions";
import {connect} from "react-redux";
import {addItemToBasket} from "../../store/basket-items/actions";
import {basketItemsReducer} from "../../store/basket-items/reducer";


export const CatalogHeadlineContainer = ({catalogItems,basketItems, addItemToBasket}) => {
    return (
        <>
            <CatalogHeadline
                catalogItemsData={catalogItems}
                basketItemsData={basketItems}
                addItemToBasket={addItemToBasket}
            />
        </>
    );

};
function mapStateToProps({basketItems}) {
    return {
        catalogItems: basketItems.catalogItems,
        basketItems:basketItems.basketItems
    }
}

const mapDispatchToProps = {
    addItemToBasket
};

export default connect(mapStateToProps,mapDispatchToProps) (CatalogHeadlineContainer);
