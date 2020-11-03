import React, {Fragment} from "react";
import {CatalogHeadline} from "../../components/catalog-headline/catalog-headline";
import {VideoBlock} from "../../components/video-block/video-block";
import catalogItems from "../../mocks/catalog-items-mock";
import {connect} from "react-redux";
import {addItemToBasket} from "../../store/basket-items/actions";

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

const mapDispatchToProps = {
     addItemToBasket
    // return {
    //     onPushItemToBasket: (itemIndex) => dispatch({type: 'ADD_ITEM_TO_BASKET', payload: itemIndex}),
    // }
}

export default connect(mapStateToProps,mapDispatchToProps) (Catalog);

