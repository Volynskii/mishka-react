import React from "react";
import cn from "classnames";
import {addItemToBasket} from "../../../../store/basket-items/actions";
import {useDispatch} from "react-redux";

const CatalogItem = ({catalogItems, basketItems}) => {
    const dispatch = useDispatch();

    const {src,
        id,
        itemName,
        itemParamOneName,
        itemParamOneValue,
        itemParamOneUnit,
        itemParamTwoName,
        itemParamTwoValue,
        itemParamTwoUnit,
        itemPrice
    } = catalogItems;

const isActiveItem = () => {
    const basketIds = basketItems.map((item) => {
        return item.id
    });
    const catalogIds = catalogItems.id;


    return basketIds.includes(catalogIds);
};


    const onClick = () => {
        dispatch(addItemToBasket(catalogItems))
    };

    return (
        <li className="catalog__list__item">

            <img src={src} alt="картинка товара" className="catalog__list__item__image"/>
            <div className="catalog__list__item__wrapper">
                <section className="catalog__list__item__param">
                    <div className="catalog__list__item__param__name">{itemName}</div>
                    <div className="catalog__list__item__param__description">{itemParamOneName} {itemParamOneValue}
                        {itemParamOneUnit}, {itemParamTwoName} {itemParamTwoValue} {itemParamTwoUnit}
                    </div>
                </section>
                <ul className="catalog__list__item__order">
                    <li className="catalog__list__item__order__price">{itemPrice} р</li>
                    <li onClick={onClick} className={cn(`catalog__list__item__order__basket`, {
                        [`tabs__item--active`]: isActiveItem()
                    })}/>
                </ul>
            </div>
        </li>
    );
};

export default CatalogItem;
