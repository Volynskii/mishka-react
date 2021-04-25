import React, {useEffect, useState} from "react";
import './main-headline.scss'
import {useSelector} from "react-redux";

export const MainHeadline = () => {
    const headerHeight = useSelector((state) => state.headerHeight.headerHeight);
    const isMobileWidth = window.innerWidth > 320 && window.innerWidth < 770;
    console.log('isMobileWidth', isMobileWidth)
    return (
<div className="main-page"
       //  style={{marginTop: `${headerHeight}` + 53 + 'px'}}
     //  style={isMobileWidth === true ? {marginTop: `${headerHeight}px`}: null}
>
    <article className="introduction-container">
            <h1 className="introduction-container__headline">Милые штуки ручной работы для дома</h1>
    <section className="introduction-container__buttons-container">
        <ul className="introduction-container__buttons-container__interior-decorations">
        <li className="introduction-container__buttons-container__interior-decorations__name">
            Предметы <br/> интерьера </li>
        </ul>
        <ul className="introduction-container__buttons-container__kids-toys">
        <li className="introduction-container__buttons-container__kids-toys__name">Детские <br/>
            игрушки</li>
            <li className="introduction-container__buttons-container__kids-toys__picture"> </li>
        </ul>
    </section>
        <div className="zigzag-container"> </div>
    </article>
</div>
    )
};

export default MainHeadline;
