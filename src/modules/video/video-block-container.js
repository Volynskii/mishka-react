import React, { useState, useEffect } from "react";
import {VideoBlock} from "./video-block/video-block";

export const VideoBlockContainer = () => {
    const [isPlaying, setPlaying] = useState(false);

    let timerId;

    useEffect(() => {
        return () => clearTimeout(timerId);
    }, [timerId]);

    const handleMouseEnter = () => {
        timerId = setTimeout(() => {
            setPlaying(true);
        }, 1000);
    };

    const handleMouseLeave = () => {
        clearTimeout(timerId);
        setPlaying(false);
    };
    return (
            <VideoBlock
                width={`100%`}
                height={`100%`}
                src={"https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"}
                poster={"./images/catalog/video-desktopv2.png"}
                isPlaying={isPlaying}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
    );
};


