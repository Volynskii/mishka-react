import './form-main.scss';
import React from "react";
import {FormType} from "./components/form-type/form-type";
import {FormColor} from "./components/form-color/form-color";
import {FormPersonalData} from "./components/form-personal-data/form-personal-data";
import {FormContactInformation} from "./components/form-contact-information/form-contact-information";
import {FormWishes} from "./components/form-wishes/form-wishes";

export const FormMain = () => {
    return (
        <>
    <form>
<FormType/>
<FormColor/>
<FormPersonalData/>
<FormContactInformation/>
<FormWishes/>
    </form>
            </>
    )
};
