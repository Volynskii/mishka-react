import React,{useEffect} from "react";
 import {MainHeadline} from "../../components/main-headline/main-headline";
import WeekProduct from "../../components/week-product/week-product"
import {Features} from "../../components/features/features"
import ReviewsContainer from "../../modules/reviews/reviews-container";
import {OurContacts} from "../../components/our-contacts/our-contacts";
import {useHeader} from "../../modules/header/useHeader";

export const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const {headerHeight} = useHeader();
        return (
            <>
            <MainHeadline headerHeight={headerHeight}/>
            <WeekProduct/>
            <Features/>
            <ReviewsContainer />
            <OurContacts/>
            </>
        )};


