"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.basketItemsReducer = void 0;
var types_1 = require("./types");
var findDuplicate_1 = require("../../helpers/findDuplicate");
var catalog_items_mock_1 = require("../../mocks/catalog-items-mock");
var initialState = {
    catalogItems: catalog_items_mock_1["default"],
    basketItems: []
};
var basketItemsReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case types_1["default"].ADD_ITEM_TO_BASKET:
            return __assign(__assign({}, state), { basketItems: findDuplicate_1.hasDublicate(state.basketItems, payload) });
        case types_1["default"].REMOVE_ITEM_FROM_BASKET:
            return __assign(__assign({}, state), { basketItems: state.basketItems.filter(function (item) { return item.id !== payload; }) });
        default:
            return state;
    }
};
exports.basketItemsReducer = basketItemsReducer;
