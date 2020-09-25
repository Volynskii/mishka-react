import React from "react";
import {connect} from "react-redux"
 import {MainHeadline} from "../components/main-headline/main-headline";
import {WeekProduct} from "../components/week-product/week-product"
import {Features} from "../components/features/features"
import Reviews from "../components/reviews/reviews";
import {OurContacts} from "../components/our-contacts/our-contacts";
import customerReviews from "../mocks/comments-mock";

export const Main = (props) => {

        return (
            <>
            <MainHeadline/>
            <WeekProduct/>
            <Features/>
            <Reviews {...props} comments={customerReviews} />
            <OurContacts/>
            </>
        )};

 function mapStateToProps({comments}) {
     return {
index: comments.index
     }
 }

 function mapDispatchToProps(dispatch) {
return {
    onNext: () => dispatch({type: 'NEXT'}),
    onSub: () => dispatch({type: 'PREV'})
}
 }

export default connect(mapStateToProps,mapDispatchToProps) (Main);
