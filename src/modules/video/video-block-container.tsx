import React from "react";
import {VideoBlock} from "./video-block/video-block";
import {useVideo} from "./useVideo";

export const VideoBlockContainer = () => {
const {isPlaying, handleMouseEnter, handleMouseLeave} = useVideo();
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


