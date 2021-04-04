import './form-main.scss';
import React from "react";
import {FormType} from "./components/form-type/form-type";
import {FormColor} from "./components/form-color/form-color";
import {FormPersonalData} from "./components/form-personal-data/form-personal-data";
import {FormContactInformation} from "./components/form-contact-information/form-contact-information";
import {FormWishes} from "./components/form-wishes/form-wishes";

import { useHistory } from "react-router-dom";

export const FormMain = () => {
    let history = useHistory();

    const onSubmit = (evt) => {
        evt.preventDefault();
        evt.currentTarget.reset();
        history.push("/");
        window.scrollTo(0, 0)
    }
    return (
        <>
    <form onSubmit={onSubmit}>

<FormType/>
<FormColor/>
<FormPersonalData/>
<FormContactInformation/>
<FormWishes/>

    </form>
            </>
    )
};
