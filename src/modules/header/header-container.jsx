import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Header} from "./header/header";

export const HeaderContainer = () => {

    const [display,setDisplay] = useState('none');

    const basketItems = useSelector((state) => state.basketItems.basketItems);
    console.log(basketItems)
    const totalQuantity = basketItems.reduce((currentTotal, item) => {
        return item.itemQuantity + currentTotal
    }, 0);

    const isActiveBasket = basketItems.length >= 1;


    const isMoreThenOneItem =  totalQuantity > 1 ? 'товара' : 'товар';

    const basketTextContent = isActiveBasket ? totalQuantity +  isMoreThenOneItem : 'Пока пуста';
    let timerId;



    const handleMouseEnter = () => {
        timerId = setTimeout(() => {
            setDisplay('flex');
        }, 0);
    };

    const handleMouseLeave = () => {
        clearTimeout(timerId);
        setDisplay('none');
    };


    return (
        <>
         <Header
             display={display}
             isActiveBasket={isActiveBasket}
             isMoreThenOneItem={isMoreThenOneItem}
             basketTextContent={basketTextContent}
             handleMouseEnter={handleMouseEnter}
             handleMouseLeave={handleMouseLeave}
             // onShowBasket={onShowBasket}
             // onHideBasket={onHideBasket}
             basketItems={basketItems}
         />
        </>
    );

};
