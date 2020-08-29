import './catalog-headline.scss';
import React from "react";


export const CatalogHeadline = () => {

    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    <li className="catalog__list__item">

    <img   className="catalog__list__item__image" alt="kartinka"/>
    <div className="catalog__list__item__name">Зайчик-попрыгайчик</div>
    <div className="catalog__list__item__description">Рост 30 см, вес 200 г</div>
    <div className="catalog__list__item__price">  1 200 руб.</div>
    <div className="catalog__list__item__badge">значок</div>
</li>

</ul>
        </article>
    )
};
