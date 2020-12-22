"use strict";
exports.__esModule = true;
exports.HeaderContainer = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var header_1 = require("./header/header");
var HeaderContainer = function () {
    var _a = react_1.useState('flex'), display = _a[0], setDisplay = _a[1];
    var basketItems = react_redux_1.useSelector(function (state) { return state.basketItems.basketItems; });
    var totalQuantity = basketItems.reduce(function (currentTotal, item) {
        return item.itemQuantity + currentTotal;
    }, 0);
    var isActiveBasket = basketItems.length >= 1;
    var isMoreThenOneItem = totalQuantity > 1 ? 'товара' : 'товар';
    var basketTextContent = isActiveBasket ? totalQuantity + isMoreThenOneItem : 'пока пуста';
    var timerId;
    var timerIdTwo;
    react_1.useEffect(function () {
        return function () { return clearTimeout(timerId); };
    }, [timerId]);
    react_1.useEffect(function () {
        return function () { return clearTimeout(timerIdTwo); };
    }, [timerIdTwo]);
    var handleMouseEnter = function () {
        clearTimeout(timerIdTwo);
        timerId = setTimeout(function () {
            setDisplay('flex');
        }, 500);
    };
    var handleMouseLeave = function () {
        clearTimeout(timerId);
        timerIdTwo = setTimeout(function () {
            setDisplay('none');
        }, 1000);
    };
    var handleTogglePopup = function () {
        clearTimeout(timerId);
        clearTimeout(timerIdTwo);
        if (display === "none") {
            setDisplay('flex');
        }
        else
            setDisplay('none');
    };
    var handleClosePopup = function () {
        clearTimeout(timerId);
        clearTimeout(timerIdTwo);
        setDisplay('none');
    };
    return (<>
            <header_1.Header display={display} isActiveBasket={isActiveBasket} basketTextContent={basketTextContent} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} basketItems={basketItems} closePopup={handleClosePopup} togglePopup={handleTogglePopup}/>
        </>);
};
exports.HeaderContainer = HeaderContainer;
