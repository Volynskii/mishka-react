import React, {Fragment} from "react";
import {CatalogHeadline} from "../../components/catalog-headline/catalog-headline";

import {VideoBlockContainer} from "../../modules/video/video-block-container";
import catalogItems from "../../mocks/catalog-items-mock";
import {connect} from "react-redux";
import {addItemToBasket} from "../../store/basket-items/actions";

export const Catalog = (props) => {
    return (
        <Fragment>
          <CatalogHeadline {...props} catalogItemsData={catalogItems}/>
<VideoBlockContainer/>
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
};

export default connect(mapStateToProps,mapDispatchToProps) (Catalog);

