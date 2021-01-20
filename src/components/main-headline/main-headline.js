import React from "react";
import './main-headline.scss'

export const MainHeadline = () => {
    return (
<div className="main-page">
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
