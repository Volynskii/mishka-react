import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useHeader = () => {
    const [visible, setVisible] = useState(true);

    // useEffect(()=>{
    //     // const headerHeight = useSelector((state) => state.headerHeight.headerHeight);
    // })
     const headerHeight = useSelector((state) => state.headerHeight.headerHeight);


    return {
        visible,
        setVisible,
        headerHeight
    }
};
