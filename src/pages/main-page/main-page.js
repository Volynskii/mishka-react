import React from "react";

 import {MainHeadline} from "../../components/main-headline/main-headline";
import WeekProduct from "../../components/week-product/week-product"
import {Features} from "../../components/features/features"
import ReviewsContainer from "../../modules/reviews/reviews-container";
import {OurContacts} from "../../components/our-contacts/our-contacts";


export const Main = () => {

        return (
            <>
            <MainHeadline/>
            <WeekProduct/>
            <Features/>
            <ReviewsContainer />
            <OurContacts/>
            </>
        )};


