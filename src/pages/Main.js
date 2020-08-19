import React, {Fragment} from "react";
 import {MainHeadline} from "../components/main-headline/main-headline";
import {WeekProduct} from "../components/week-product/week-product"
import {Features} from "../components/features/features"
import {Reviews} from "../components/reviews/reviews";

export const Main = () => {
    return (
        <Fragment>
<MainHeadline/>
<WeekProduct/>
<Features/>
<Reviews/>
        </Fragment>
    )
};
