import React from "react";
import cn from "classnames";

const CatalogItem = ({
                         catalogItems,
                         basketItems,
                         id,
                         name,
                         paramOneName,
                         paramOneValue,
                         paramOneUnit,
                         paramTwoName,
                         paramTwoValue,
                         paramTwoUnit,
                         price,
                         addToBasket,
                         src,
                         dispatch
                     }) => {

const isActiveItem = () => {
    const basketIds = basketItems.map((item) => {
        return item.id
    });
    const catalogIds = catalogItems.map((item) => {
        return item.id
    });

    return basketIds.includes(catalogIds[id]);
};


    const onClick = () => {
        dispatch(addToBasket(catalogItems[id]))
    };

    return (
        <li className="catalog__list__item">

            <img src={src} alt="картинка товара" className="catalog__list__item__image"/>
            <div className="catalog__list__item__wrapper">
                <section className="catalog__list__item__param">
                    <div className="catalog__list__item__param__name">{name}</div>
                    <div className="catalog__list__item__param__description">{paramOneName} {paramOneValue}
                        {paramOneUnit}, {paramTwoName} {paramTwoValue} {paramTwoUnit}
                    </div>
                </section>
                <ul className="catalog__list__item__order">
                    <li className="catalog__list__item__order__price">{price} р</li>
                    <li onClick={onClick} className={cn(`catalog__list__item__order__basket`, {
                        [`tabs__item--active`]: isActiveItem()
                    })}/>
                </ul>
            </div>
        </li>
    );
};

export default CatalogItem;
