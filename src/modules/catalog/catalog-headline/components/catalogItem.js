import React from "react";
import cn from "classnames";
import {addItemToBasket} from "../../../../store/basket-items/actions";
import {useDispatch} from "react-redux";

const CatalogItem = ({catalogItem, basketItem}) => {
    const dispatch = useDispatch();

    const {src,
        itemName,
        itemParamOneName,
        itemParamOneValue,
        itemParamOneUnit,
        itemParamTwoName,
        itemParamTwoValue,
        itemParamTwoUnit,
        itemPrice
    } = catalogItem;

const onIsActiveItem = () => {
    const basketItemId = basketItem.map((item) => {
        return item.id
    });
    const catalogItemId = catalogItem.id;

    return basketItemId.includes(catalogItemId);
};


    const onClick = () => {
        dispatch(addItemToBasket(catalogItem))
    };

    return (
        <li className="catalog__list__item">
            <div className="catalog__list__item__image">
            <img className="catalog__list__item__image-picture"  src={src} alt="картинка товара"/>
            </div>
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
                        [`tabs__item--active`]: onIsActiveItem()
                    })}/>
                </ul>
            </div>
        </li>
    );
};

export default CatalogItem;
