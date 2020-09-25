import {types} from "./actionTypes";

const initialState = [{id:1,itemPrice: 3000,itemName:'Зайчик-попрыгайчик', itemHeight: 30, itemWeight: 200,itemQuantity: 1 }];

export const basketItemsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case types.ADD_ITEM_TO_BASKET:
            const stateId = state.map((it) => {
                return it.id;
            });
            const isIncluded = stateId.includes(payload.id);
            const findDuplicate = (wantedItem) => {

                var foundIndex = state.findIndex((item) => item.id === payload.id)
                state[foundIndex].itemQuantity = state[foundIndex].itemQuantity + 1
            };

 if (isIncluded) {
    findDuplicate(payload)
     return ([...state])
 }
            return (
        [
                ...state,
               {
                   id: payload.id,
                       itemPrice: payload.itemPrice,
                   itemName:payload.itemName,
                   itemHeight: payload.itemHeight,
                   itemWeight:payload.itemWeight,
                   itemQuantity: payload.itemQuantity
               }
               ]);

        case types.REMOVE_ITEM_FROM_BASKET:
            console.log(' Remove me');
            return  state.filter(item => item.id !== payload.id);
        default:
            return state;
    }
    // return state;
};
