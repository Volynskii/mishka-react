import React, {Fragment} from "react";
 import {MainHeadline} from "../components/main-headline/main-headline";
import {WeekProduct} from "../components/week-product/week-product"
import {Features} from "../components/features/features"
import {Reviews} from "../components/reviews/reviews";
import {OurContacts} from "../components/our-contacts/our-contacts";
import Footer from "../components/footer/footer.jsx";

export const Main = () => {
    return (
        <Fragment>
<MainHeadline/>
<WeekProduct/>
<Features/>
<Reviews/>
<OurContacts/>
<Footer/>
        </Fragment>
    )
};
