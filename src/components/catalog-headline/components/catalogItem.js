import React from "react";
import cn from "classnames";

const CatalogItem = ({catalogItemsData, basketItems, index, name, weight, height, price, addToBasket,  removeFromBasket}) => {

    const basketId = basketItems.map((item) => {
        return item.id
    });
    const catalogId = catalogItemsData.map((item) => {
        return item.id
    });

    const isActive = basketId.includes(catalogId[index]);

    const onClick = (evt) => {

  addToBasket(catalogItemsData[index])
     // removeFromBasket(catalogItemsData[index])
    };
    return (
        <li className="catalog__list__item">

            <div  className="catalog__list__item__image"/>
            <div className="catalog__list__item__wrapper">
                <section className="catalog__list__item__param">
                    <div className="catalog__list__item__param__name">{name}</div>
                    <div className="catalog__list__item__param__description">рост {height} см, вес {weight} г </div>
                </section>
                <ul className="catalog__list__item__order">
                    <li className="catalog__list__item__order__price">{price} р</li>
                    <li onClick={onClick} className={cn(`catalog__list__item__order__basket`, {
                        [`tabs__item--active`]: isActive   })}> </li>
                </ul>
            </div>
        </li>
    );
};

export default CatalogItem;
