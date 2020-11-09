import React from "react";

export default function BasketItem({removeItemFromBasket, basketItems,index,itemPrice,itemName,itemHeight,itemWeight,itemsId,itemQuantity}) {

    const onClick = (evt) => {
        removeItemFromBasket(basketItems[index])
    };
    return (
<>
    <div className="basket-popup__main__wrapper">

        <div className="basket-popup__main__picture"/>
        <div className="basket-popup__main__item-decription">
            <span className="basket-popup__main__price">{itemPrice}р</span>
            <p className="basket-popup__main__text">{itemName}</p>
            <table className="basket-popup__table">
                <tbody className="basket-popup__table__wrapper">
                <tr className="basket-popup__table__list">
                    <td className="basket-popup__table__param">рост:</td>
                    <td className="basket-popup__param-two">{itemHeight} см</td>
                </tr>
                <tr className="basket-popup__table__list">
                    <td className="basket-popup__table__param-second">
                        вес:</td>
                    <td className="basket-popup__table__param-two">{itemWeight} г</td>
                </tr>
                <tr className="basket-popup__table__list">
                    <td className="basket-popup__table__param-second">
                        кол-во:</td>
                    <td className="basket-popup__table__param-two">{itemQuantity} шт</td>
                </tr>
                </tbody>
            </table>
            <button onClick={onClick} className="remove-item-sign"></button>
        </div>
    </div>

</>
    )
}
