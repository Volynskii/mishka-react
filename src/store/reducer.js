"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
//core
var redux_1 = require("redux");
//Reducers
var reducer_1 = require("./comments/reducer");
var reducer_2 = require("./basket-items/reducer");
exports.rootReducer = redux_1.combineReducers({
    comments: reducer_1.commentsReducer,
    basketItems: reducer_2.basketItemsReducer
});
