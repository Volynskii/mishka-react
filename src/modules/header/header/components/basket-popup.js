import './basket-popup.scss'
import React from "react";

import BasketItem from './components/basket-item'

export default function BasketPopup({
                                        basketItems,
                                        // onShowBasket,
                                        display,
                                        onHideBasket,
                                        dispatch,
                                        removeItem
}) {

const totalPrice = basketItems.reduce((currentTotal, item) => {
    return item.itemPrice * item.itemQuantity + currentTotal
}, 0);

console.log(display)
return  (
<article style={{display:display }} className="basket-popup">
<section className="basket-popup__header">
    <p className="basket-popup__header__text"/>

        <div onClick={onHideBasket} className="cl-btn-2">
            <div>
                <div className="leftright"/>
                <div className="rightleft"/>
                <span className="close-btn">закрыть</span>
            </div>
        </div>

</section>
    <section className="basket-popup__main">
         {basketItems.map((item,index) =>
             <BasketItem
                 dispatch={dispatch}
                 removeItem={removeItem}
                 basketItem={basketItems[index]}
             key={basketItems[index].id}
                 itemSrc={basketItems[index].src}
             itemPrice={basketItems[index].itemPrice}
             itemName={basketItems[index].itemName}
             itemParamOneName={basketItems[index].itemParamOneName}
             itemParamOneValue={basketItems[index].itemParamOneValue}
                 itemParamOneUnit={basketItems[index].itemParamOneUnit}
             itemParamTwoName={basketItems[index].itemParamTwoName}
             itemParamTwoValue={basketItems[index].itemParamTwoValue}
                 itemParamTwoUnit={basketItems[index].itemParamTwoUnit}
             itemQuantity={basketItems[index].itemQuantity}
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

)
}
