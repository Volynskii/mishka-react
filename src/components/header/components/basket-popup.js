import React,{useContext} from "react";
import {Context} from "../context";
import './basket-popup.scss'
import BasketItem from './components/basket-item'

export default function BasketPopup(props) {

    const {onShowBasket,display,onHideBasket, isPlaying} = useContext(Context);

const totalPrice = props.basketItems.reduce((currentTotal, item) => {
    return item.itemPrice * item.itemQuantity + currentTotal
}, 0);

console.log(display)
return  (
<article style={{display:isPlaying }} className="basket-popup">
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
         {props.basketItems.map((item,index) => <BasketItem
             removeItemFromBasket={props.onRemoveItemFromBasket}
             basketItems={props.basketItems}
             key={index}
             index={index}
             itemPrice={props.basketItems[index].itemPrice}
             itemName={props.basketItems[index].itemName}
             itemHeight={props.basketItems[index].itemHeight}
             itemWeight={props.basketItems[index].itemWeight}
             itemQuantity={props.basketItems[index].itemQuantity}
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
