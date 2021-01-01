import React from "react";
import cn from "classnames";
import {addItemToBasket} from "../../../../store/basket-items/actions";
import {useDispatch} from "react-redux";

type Props = {
    catalogItem: {
        id: number;
        src: string;
        itemName: string;
        itemParamOneName: string;
        itemParamOneValue: string;
        itemParamOneUnit: string;
        itemParamTwoName: string;
        itemParamTwoValue: string;
        itemParamTwoUnit: string;
        itemPrice: number;
    };
    basketItem: {
        id: number;
        src: string;
        itemName: string;
        itemParamOneName: string;
        itemParamOneValue: string;
        itemParamOneUnit: string;
        itemParamTwoName: string;
        itemParamTwoValue: string;
        itemParamTwoUnit: string;
        itemPrice: number; }[];
}

const CatalogItem: React.FC<Props> = ({catalogItem, basketItem}) => {
    const dispatch = useDispatch();

    const {
        src,
        itemName,
        itemParamOneName,
        itemParamOneValue,
        itemParamOneUnit,
        itemParamTwoName,
        itemParamTwoValue,
        itemParamTwoUnit,
        itemPrice
    } = catalogItem;

    const onIsActiveItem: () => boolean = () => {

        const basketItemId = basketItem.map((item) => {
            return item.id
        });
        const catalogItemId = catalogItem.id;

        return basketItemId.includes(catalogItemId);
    };


    const onClick: () => void = () => {
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
