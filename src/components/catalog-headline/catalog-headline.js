import './catalog-headline.scss';
import React from "react";


export const CatalogHeadline = () => {

    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    <li className="catalog__list__item">

    <div  className="catalog__list__item__image"/>
        <div className="catalog__list__item__wrapper">
    <section className="catalog__list__item__param">
    <div className="catalog__list__item__param__name">Зайчик-попрыгайчик</div>
    <div className="catalog__list__item__param__description">Рост 30 см, вес 200 г </div>
    </section>
    <ul className="catalog__list__item__order">
        <li className="catalog__list__item__order__price">  1 200 руб.</li>
        <li className="catalog__list__item__order__basket"> </li>
    </ul>
        </div>
</li>

    <li className="catalog__list__item">

        <div  className="catalog__list__item__image"/>
        <div className="catalog__list__item__wrapper">
            <section className="catalog__list__item__param">
                <div className="catalog__list__item__param__name">Зайчик-попрыгайчик</div>
                <div className="catalog__list__item__param__description">Рост 30 см, вес 200 г </div>
            </section>
            <ul className="catalog__list__item__order">
                <li className="catalog__list__item__order__price">  1 200 руб.</li>
                <li className="catalog__list__item__order__basket"> </li>
            </ul>
        </div>
    </li>

    <li className="catalog__list__item">

        <div  className="catalog__list__item__image"/>
        <div className="catalog__list__item__wrapper">
            <section className="catalog__list__item__param">
                <div className="catalog__list__item__param__name">Зайчик-попрыгайчик</div>
                <div className="catalog__list__item__param__description">Рост 30 см, вес 200 г </div>
            </section>
            <ul className="catalog__list__item__order">
                <li className="catalog__list__item__order__price">  1 200 руб.</li>
                <li className="catalog__list__item__order__basket"> </li>
            </ul>
        </div>
    </li>






</ul>
        </article>
    )
};
