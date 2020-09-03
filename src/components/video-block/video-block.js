import './video-block.scss';
import React from "react";
// import {VideoPlayer} from './components/video-player.jsx';

export const VideoBlock = () => {
return <article className="video-block">
    <div className="video-block__video">
        {/*<VideoPlayer/>*/}
    </div>

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
};
