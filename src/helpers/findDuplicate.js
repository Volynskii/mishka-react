export const hasDublicate = (state,payload) => {
    const stateIds = state.map((it) => {
        return it.id;
    });
    const isIncluded = stateIds.includes(payload.id);
    const findDuplicate = (payload) => {

        var foundIndex = state.findIndex((item) => item.id === payload.id);
        state[foundIndex].itemQuantity = state[foundIndex].itemQuantity + 1
    };

    if (isIncluded) {
        findDuplicate(payload);
        return ([...state])
    }
    return (
        [
            ...state,
            {
                id: payload.id,
                src: payload.src,
                itemPrice: payload.itemPrice,
                itemName:payload.itemName,
                itemParamOneName: payload.itemParamOneName,
                itemParamOneValue: payload.itemParamOneValue,
                itemParamOneUnit: payload.itemParamOneUnit,
                itemParamTwoName : payload.itemParamTwoName,
                itemParamTwoValue : payload.itemParamTwoValue,
                itemParamTwoUnit: payload.itemParamTwoUnit,
                itemQuantity: payload.itemQuantity
            }
        ]
    );

};
