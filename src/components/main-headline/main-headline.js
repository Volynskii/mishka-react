import React from "react";
import './main-headline.less'

export const MainHeadline = () => {
    return (
<div className="main-page">
    <article className="introduction-container">
            <h1 className="introduction-container__headline">Милые штуки ручной работы для дома</h1>
    <section className="introduction-container__buttons-container">
        <ul className="introduction-container__buttons-container__interior-decorations">
        <li className="introduction-container__buttons-container__interior-decorations__name">
            Предметы <br/> интерьера </li>
            <li className="introduction-container__buttons-container__interior-decorations__picture">картинка</li>
        </ul>
        <ul className="introduction-container__buttons-container__kids-toys">
        <li className="introduction-container__buttons-container__kids-toys__name">Детские <br/>
            игрушки</li>
            <li className="introduction-container__buttons-container__kids-toys__picture">картинка</li>
        </ul>
    </section>
    </article>
</div>
    )
};