import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./header/header";
import {removeItemFromBasket as action} from "../../store/basket-items/actions";

export const HeaderContainer = () => {

    const [display,setDisplay] = useState('none');
    const dispatch = useDispatch();

    const basketItems = useSelector((state) => state.basketItems.basketItems);
    const totalQuantity = basketItems.reduce((currentTotal, item) => {
        return item.itemQuantity + currentTotal
    }, 0);

    const isActiveBasket = basketItems.length >= 1;


    const isMoreThenOneItem =  totalQuantity > 1 ? 'товара' : 'товар';

    const basketTextContent = isActiveBasket ? totalQuantity  +  isMoreThenOneItem : 'Пока пуста';
    let timerId;
let timerIdTwo;

    useEffect(() => {
        return () => clearTimeout(timerId);
    }, [timerId]);
    useEffect(() => {
        return () => clearTimeout(timerIdTwo);
    }, [timerIdTwo]);
    const handleMouseEnter = () => {
        clearTimeout(timerIdTwo);
        timerId = setTimeout(() => {
            setDisplay('flex');
        }, 500);
    };

    const handleMouseLeave = () => {
        clearTimeout(timerId);
        timerIdTwo = setTimeout(() => {
            setDisplay('none');
        }, 1000);
    };

    const togglePopup = () => {
        clearTimeout(timerId);
        clearTimeout(timerIdTwo);
        if(display === "none") {
            setDisplay('flex');
        } else
        setDisplay('none');
    };

    const closePopup = () => {
        clearTimeout(timerId);
        clearTimeout(timerIdTwo);
        setDisplay('none');
    };
    return (
        <>
         <Header
             display={display}
             isActiveBasket={isActiveBasket}
             basketTextContent={basketTextContent}
             handleMouseEnter={handleMouseEnter}
             handleMouseLeave={handleMouseLeave}
             basketItems={basketItems}
             dispatch={dispatch}
             removeItem={action}
             closePopup={closePopup}
             openPopup={togglePopup}
         />
        </>
    );

};
