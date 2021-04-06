import React, {Fragment, useEffect} from "react";

import {CatalogHeadlineContainer} from "../../modules/catalog/catalog-headline-container";
import {VideoBlockContainer} from "../../modules/video/video-block-container";

export const Catalog = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Fragment>
          <CatalogHeadlineContainer/>
<VideoBlockContainer/>
        </Fragment>
    )

};
