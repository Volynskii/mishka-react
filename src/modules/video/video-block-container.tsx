import React from "react";
import {VideoBlock} from "./video-block/video-block";
import {useVideo} from "./useVideo";

export const VideoBlockContainer = () => {
const {isPlaying, handleMouseEnter, handleMouseLeave} = useVideo();
    const embedId = "https://www.youtube.com/embed/F6gnmChf7fM";
    return (
        <VideoBlock
            width={`100%`}
            height={`100%`}
            src={embedId}
            poster={"./images/catalog/video-desktopv2.png"}
            isPlaying={isPlaying}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};


