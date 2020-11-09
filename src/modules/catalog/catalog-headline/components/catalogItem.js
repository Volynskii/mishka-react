import React, {useCallback} from "react";
import cn from "classnames";
import {addItemToBasket as action} from "../../../../store/basket-items/actions";

const CatalogItem = ({catalogItemsData,
                         basketItems,
                         id,
                         name,
                         paramOneName,
                         paramOneValue,
                         paramTwoName,
    paramTwoValue,
                         price,
                         addToBasket,
                         src,
                          dispatch,
                          useCallback
}) => {


    const basketIds = basketItems.map((item) => {
        return item.id
    });
    const catalogIds = catalogItemsData.map((item) => {
        return item.id
    });

    const isActive = basketIds.includes(catalogIds[id]);
    const addItemToBasket = useCallback(
        () => dispatch({type: `ADD_ITEM_TO_BASKET`, payload:catalogItemsData[id]}),[catalogItemsData]
    );
    const onClick = (evt) =>  {


         // addToBasket(catalogItemsData[id])

    };

    return (
        <li className="catalog__list__item">

            <img src={src} alt="картинка товара"  className="catalog__list__item__image"/>
            <div className="catalog__list__item__wrapper">
                <section className="catalog__list__item__param">
                    <div className="catalog__list__item__param__name">{name}</div>
                    <div className="catalog__list__item__param__description">{paramOneName} {paramOneValue}
                    см, {paramTwoName} {paramTwoValue} г </div>
                </section>
                <ul className="catalog__list__item__order">
                    <li className="catalog__list__item__order__price">{price} р</li>
                    <li onClick={addItemToBasket} className={cn(`catalog__list__item__order__basket`, {
                        [`tabs__item--active`]: isActive   })}> </li>
                </ul>
            </div>
        </li>
    );
};

export default CatalogItem;
