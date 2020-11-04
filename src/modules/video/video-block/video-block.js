import './video-block.scss';
import React, { useState, useRef, useEffect} from "react";

export const VideoBlock = ({width,height,src,poster,isPlaying, onMouseEnter, onMouseLeave}) => {

    const videoRef = useRef(null);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const { current: video } = videoRef;
        video.oncanplaythrough = () => {
            setLoading(false);
        };

        return () => {
            video.oncanplaythrough = null;
        };
    }, []);

    useEffect(() => {
        const { current: video } = videoRef;
        if (isLoading) {
            return;
        }

        if (isPlaying) {
            video.play();
        } else {
            video.load();
        }
    }, [isPlaying]);

return (
    <article className="video-block">
    <video
        ref={videoRef}
        muted={true}
        width={width}
        height={height}
         src={src}
         poster={poster}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}


    />

    <section className="video-block__order">
        <div className="video-block__order__wrapper">
        <div className="video-block__order__badge"/>
       <h1 className="video-block__order__headline"> Процесс
           производства</h1>
        <p className="video-block__order__text">По просьбам наших любимых фолловеров
            мы сняли для вас подробное видео о
            том, как появляются наши товары.</p>
        <button className="video-block__order__button">СДЕЛАТЬ ЗАКАЗ</button>
        </div>
    </section>
</article>
)
};
