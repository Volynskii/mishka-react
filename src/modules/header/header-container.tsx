import React, {useState, useEffect} from "react";
import { useSelector} from "react-redux";
import Header from "./header/header";
import {rootReducer} from "../../store/reducer";

export const HeaderContainer = () => {

    const [display,setDisplay] = useState('none');

    const basketItems = useSelector((state: rootReducer) => state.basketItems.basketItems);
    const totalQuantity = basketItems.reduce((currentTotal: number, item: {itemQuantity: number}) => {
        return item.itemQuantity + currentTotal
    }, 0);

    const isActiveBasket = basketItems.length >= 1;

    const isMoreThenOneItem = totalQuantity > 1 ? 'товара' : 'товар';

    const basketTextContent = isActiveBasket ? `${totalQuantity} ${isMoreThenOneItem}` : 'пока пуста';
    let timerId: any ;
    let timerIdTwo:  any;

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

    const handleMouseLeave: () => void = () => {
        clearTimeout(timerId);
        timerIdTwo = setTimeout(() => {
            setDisplay('none');
        }, 500);
    };

    const handleTogglePopup: () => void = () => {
        clearTimeout(timerId);
        clearTimeout(timerIdTwo);
        if(display === "none") {
            setDisplay('flex');
        } else
            setDisplay('none');
    };

    const handleClosePopup: () => void = () => {
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
                closePopup={handleClosePopup}
                togglePopup={handleTogglePopup}
            />
        </>
    );

};
