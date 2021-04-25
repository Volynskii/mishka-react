import {types} from "./types";

export const measureHeight = (height) => {
    return {
        type: types.MEASURE_HEIGHT,
        payload: height
    };
};
