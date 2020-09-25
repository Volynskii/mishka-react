import React, {Fragment} from "react";
import {CatalogHeadline} from "../components/catalog-headline/catalog-headline"
import {VideoBlock} from "../components/video-block/video-block";
import catalogItems from "../mocks/catalog-items-mock"
import {connect} from "react-redux";

export const Catalog = (props) => {
    return (
        <Fragment>
          <CatalogHeadline {...props} catalogItemsData={catalogItems}/>
<VideoBlock/>
        </Fragment>
    )
};

function mapStateToProps({basketItems}) {
    return {
basketItems: basketItems,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPushItemToBasket: (itemIndex) => dispatch({type: 'ADD_ITEM_TO_BASKET', payload: itemIndex}),
         onRemoveItemFromBasket: (itemIndex) => dispatch({type: 'REMOVE_ITEM_FROM_BASKET', payload: itemIndex})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Catalog);

