"use strict";
exports.__esModule = true;
exports.BasketItem = void 0;
var react_1 = require("react");
var actions_1 = require("../../../../../store/basket-items/actions");
var react_redux_1 = require("react-redux");
var BasketItem = function (_a) {
    var basketItem = _a.basketItem;
    var id = basketItem.id, src = basketItem.src, itemPrice = basketItem.itemPrice, itemName = basketItem.itemName, itemParamOneName = basketItem.itemParamOneName, itemParamOneValue = basketItem.itemParamOneValue, itemParamOneUnit = basketItem.itemParamOneUnit, itemParamTwoValue = basketItem.itemParamTwoValue, itemParamTwoName = basketItem.itemParamTwoName, itemParamTwoUnit = basketItem.itemParamTwoUnit, itemQuantity = basketItem.itemQuantity;
    var dispatch = react_redux_1.useDispatch();
    var onClick = function () {
        dispatch(actions_1.removeItemFromBasket(id));
    };
    return (<>
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

        </>);
};
exports.BasketItem = BasketItem;
exports["default"] = exports.BasketItem;
