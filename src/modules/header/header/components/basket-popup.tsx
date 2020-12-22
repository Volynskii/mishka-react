import './basket-popup.scss'
import React from "react";

import BasketItem from './components/basket-item'

type Props = {
    basketItems: {
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
    }[];
    display: string;
    handleMouseEnter:() => void;
    handleMouseLeave:() => void;
    closePopup:() => void;
}

export  const BasketPopup : React.FC<Props> = ({
                                        basketItems,
                                        display,
                                        handleMouseEnter,
                                        handleMouseLeave,
                                        closePopup
                                    }) =>  {

    const totalPrice: number = basketItems.reduce((currentTotal: number, item: {itemPrice: number, itemQuantity: number}) => {
        return item.itemPrice * item.itemQuantity + currentTotal
    }, 0);


    return (
        <article
            onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            style={{display: display}}
            className="basket-popup">

            <section className="basket-popup__header">
                <p className="basket-popup__header__text"/>

                <div onClick={closePopup} className="cl-btn-2">
                    <div>
                        <div className="leftright"/>
                        <div className="rightleft"/>
                        <span className="close-btn">закрыть</span>
                    </div>
                </div>

            </section>
            <section className="basket-popup__main">
                {basketItems.map((basketItem: {
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
                }) =>
                    <BasketItem
                        basketItem={basketItem}
                        key={basketItem.id}
                    />)}
            </section>
            <section className="basket-popup__footer">
                <div className="basket-popup__price-block">
                    <div>Всего:</div>
                    <div>{totalPrice} руб.</div>
                </div>
                <button className="basket-popup__price-block__submit-button">Оформить заказ</button>
            </section>
        </article>

    );
};
export default BasketPopup;
