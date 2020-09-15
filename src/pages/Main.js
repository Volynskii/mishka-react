import React, {Component} from "react";
 import {MainHeadline} from "../components/main-headline/main-headline";
import {WeekProduct} from "../components/week-product/week-product"
import {Features} from "../components/features/features"
import Reviews from "../components/reviews/reviews";
import {OurContacts} from "../components/our-contacts/our-contacts";
import customerReviews from "../mocks/comments-mock";

export class Main extends Component {

    render() {
        return (
            <>
            <MainHeadline/>
            <WeekProduct/>
            <Features/>
            <Reviews comments={customerReviews}/>
            <OurContacts/>
            </>
        )
    }
};
