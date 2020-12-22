import React from "react";
import {removeItemFromBasket} from "../../../../../store/basket-items/actions";
import {useDispatch} from "react-redux";

type Props = {
    basketItem: {
        id: number;
        src: string;
        itemPrice: number;
        itemName: string;
        itemParamOneName: string;
        itemParamOneValue: number;
        itemParamOneUnit : string;
        itemParamTwoValue: number;
        itemParamTwoName: string;
        itemParamTwoUnit: string;
        itemQuantity: number;
    };
}

export const BasketItem: React.FC<Props> = ({basketItem}) =>  {

    const {
        id,
        src,
        itemPrice,
        itemName,
        itemParamOneName,
        itemParamOneValue,
        itemParamOneUnit,
        itemParamTwoValue,
        itemParamTwoName,
        itemParamTwoUnit,
        itemQuantity
    } = basketItem;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(removeItemFromBasket(id))
    };
    return (
        <>
            <div className="basket-popup__main__wrapper">
        <div className="basket-popup__main__wrapper__item">

        <img alt="basket-popup__main__picture" src={src} className="basket-popup__main__picture"/>
    <div className="basket-popup__main__item-decription">
    <span className="basket-popup__main__price">{itemPrice}р</span>
    <p className="basket-popup__main__text">{itemName}</p>
        <table className="basket-popup__table">
    <tbody className="basket-popup__table__wrapper">
    <tr className="basket-popup__table__list">
    <td className="basket-popup__table__param">{itemParamOneName}:</td>
    <td className="basket-popup__param-two">{itemParamOneValue} {itemParamOneUnit}</td>
    </tr>
    <tr className="basket-popup__table__list">
    <td className="basket-popup__table__param-second">
        {itemParamTwoName}:
    </td>
    <td className="basket-popup__table__param-two">{itemParamTwoValue} {itemParamTwoUnit}</td>
    </tr>
    <tr className="basket-popup__table__list">
    <td className="basket-popup__table__param-second">
        кол-во:
    </td>
    <td className="basket-popup__table__param-two">{itemQuantity} шт</td>
    </tr>
    </tbody>
    </table>
    <button onClick={onClick} className="remove-item-sign"/>
        </div>
        </div>

        </div>

        </>
)
};

 export default BasketItem;

