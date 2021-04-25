import  {types} from "./types";

const initialState : {
    headerHeight: number | any;
} = {headerHeight : 165
};

export const headerMargin = (state = initialState,{type,payload}: {type:string, payload: any}) => {
    console.log('INITIAL STATE', state)
    switch (type) {
        case types.MEASURE_HEIGHT:
            return {
                ...state,
                headerHeight: (payload)
            };
        default:
            return state;
    }

};
