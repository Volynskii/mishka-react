import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import './Header.scss';
import BasketPopupBasketPopup from "./components/basket-popup";
import {connect} from "react-redux";
import cn from "classnames";
import {Context} from "./context";

export const Header = (props) => {

    const totalQuantity = props.basketItems.reduce((currentTotal, item) => {
        return item.itemQuantity + currentTotal
    }, 0);

     const isActiveBasket = props.basketItems.length >= 1;

    const [display,setDisplay] = useState('none');

const isMoreThenOneItem =  totalQuantity > 1 ? 'товара' : 'товар';

const basketTextContent = isActiveBasket ? totalQuantity +  isMoreThenOneItem : 'Пока пуста';
    const [isPlaying, setPlaying] = useState('none');
    let timerId;
console.log(isPlaying)
    useEffect(() => {
        return () => clearTimeout(timerId);
    }, []);

    const handleMouseEnter = () => {
        timerId = setTimeout(() => {
            setPlaying('flex');
        }, 0);
    };

    const handleMouseLeave = () => {
        clearTimeout(timerId);
        setPlaying('none');
    };


const onShowBasket = () => {
     clearTimeout(hideTimeout());
    setDisplay('flex');
};
const hideTimeout = () => {
    // clearTimeout(onShowBasket)
     onHideBasket();
    //  setTimeout(onHideBasket,1000)
};

    const onHideBasket = () => {
        setDisplay('none')
    };

    return (
        <Context.Provider value={{
            onShowBasket,
            display,
            onHideBasket,
            isPlaying

        }}>
        <div className="main-header">
            <div className="main-header__wrapper">
                <div className="nav-container">

                    <ul className="nav-container container-two">
                        <NavLink to="/catalog" className="nav-container__item nav-catalog">
                            Каталог товаров</NavLink>

                        <NavLink to="/form" className="nav-container__item nav-form">Вязание на заказ</NavLink>
                    </ul>

                    <NavLink name="navigation" to="/" exact className="nav-container__item nav-main"/>

                </div>

                <div className="helper-container">
                    <div className="helper-container__search"/>

                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                         className={cn(`helper-container__basket`,
                             {[`helper-container__basket-active`]:
                        isActiveBasket   })}>Корзина:  &nbsp;
                        {basketTextContent}</div>
                    <BasketPopupBasketPopup
                        style={{display: isPlaying}}  {...props}/>
                    <br/>
                    <div className="free-delivery-tablet">Бесплатная доставка по России</div>
                </div>

            </div>

            <div className="container-filter">
                <ul className="container-filter__filter">
                    <li className="container-filter__filter__item new-arrivals">Новые поступления</li>
                    <li className="container-filter__filter__item sale">Распродажа</li>
                </ul>

                <div className="free-delivery">Бесплатная доставка по России</div>
            </div>

        </div>
        </Context.Provider>
    );
};

function mapStateToProps({basketItems}) {
    return {
        basketItems:basketItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveItemFromBasket: (itemIndex) => dispatch({type: 'REMOVE_ITEM_FROM_BASKET', payload: itemIndex})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Header);
