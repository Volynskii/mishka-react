import { useState, useEffect } from "react";

export const useVideo = () => {
    const [isPlaying, setPlaying] = useState(false);

    let timerId: any;

    useEffect(() => {
        return () => clearTimeout(timerId);
    }, [timerId]);

    const handleMouseEnter: () => void = () => {
        timerId = setTimeout(() => {
            setPlaying(true);
        }, 1000);
    };

    const handleMouseLeave: () => void = () => {
        clearTimeout(timerId);
        setPlaying(false);
    };
    return {
        isPlaying,
        handleMouseEnter,
        handleMouseLeave
    };

};


