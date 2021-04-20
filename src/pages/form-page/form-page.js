import React, {Fragment, useEffect} from "react";
import {FormHeadline} from "../../components/form-headline/form-headline";
import {FormMain} from "../../components/form-main/form-main";


export const Form = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <Fragment>
           <FormHeadline/>
           <FormMain/>
        </Fragment>
    )
};
