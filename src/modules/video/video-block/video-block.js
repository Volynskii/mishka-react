import './video-block.scss';
import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";

export const VideoBlock = ({src,poster,isPlaying, onMouseEnter, onMouseLeave}) => {

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
    }, [isLoading,isPlaying]);

return (
    <article className="video-block">
    <video
        className={"video-block__video"}
        ref={videoRef}
        muted={true}
         width={null}
         height={null}
         src={src}
         poster={poster}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}


    />

    <section className="video-block__order">
        <div className="video-block__order__wrapper">
            <section className="video-block__order__headline-container">
        <div className="video-block__order__badge"/>
       <h1 className="video-block__order__headline"> Процесс
           производства</h1>
            </section>
        <p className="video-block__order__text">По просьбам наших любимых фолловеров
            мы сняли для вас подробное видео о
            том, как появляются наши товары.</p>
        <Link  to={`/form`} className="video-block__order__button">СДЕЛАТЬ ЗАКАЗ</Link>
        </div>
    </section>
</article>
)
};
