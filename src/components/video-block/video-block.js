import './video-block.scss';
import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const VideoBlock = () => {

    const [isFull, setFull] = useState(false);
    const promo = useSelector((state) => state.promo);
    const dispatch = useDispatch();
    const history = useHistory();

return <article className="video-block">
    <video width="480" controls poster="https://www.youtube.com/watch?v=rY-g472sb4o&t=1230s&ab_channel=chizhny" >
        <source src="https://www.youtube.com/watch?v=rY-g472sb4o&t=1230s&ab_channel=chizhny" type="video/mp4"/>

    </video>

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
