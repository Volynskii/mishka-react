import './features.scss'
import React from "react";

export const Features = () => {

    return (
<article className="features">
<span>Коротко о нас:</span>
<section>
    <ul className="features__list">
        <li className="features__list__item">
            <div className="features__list__item__picture--one"/>
            <div>Экологически чистые материалы</div>
            </li>

        <li className="features__list__item">
            <div className="features__list__item__picture--two"/>
            <div>Связано вручную с
            любовью и умилением</div>
            </li>

        <li className="features__list__item">
            <div className="features__list__item__picture--three"/>
            <div>Скандинавский стиль
            по российской цене</div>
            </li>

        <li className="features__list__item">
            <div className="features__list__item__picture--four"></div>
            <div>Поддержка отечественного производителя</div>
            </li>

        <li className="features__list__item">
            <div className="features__list__item__picture--five"></div>
            <div>Увеличивает лайки
            на фотографиях</div>
            </li>

        <li className="features__list__item">
            <div className="features__list__item__picture--six"></div>
            <div>Поставляется в
            подарочной упаковке</div>
            </li>
    </ul>
</section>
</article>

    )
};
