import React, {Fragment} from "react";

import {CatalogHeadlineContainer} from "../../modules/catalog/catalog-headline-container";
import {VideoBlockContainer} from "../../modules/video/video-block-container";

export const Catalog = (props) => {

    return (
        <Fragment>
          <CatalogHeadlineContainer/>
<VideoBlockContainer/>
        </Fragment>
    )

};
