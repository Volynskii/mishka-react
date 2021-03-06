import React, { useEffect } from "react";
 import "./success-popup.scss";
import cx from "classnames";


const SuccessPopup = ({ className, title,  successPopupDisplay ,closeSuccessPopup, textContent }) => {
    useEffect(() => {
        const onEscKeyDown = (evt) => {
            if (evt.key === `Escape`) {
                closeSuccessPopup();
            }
        };
        document.addEventListener(`keydown`, onEscKeyDown);
        return () => document.removeEventListener(`keydown`, onEscKeyDown);
    }, [closeSuccessPopup]);

    const onConfirmClick = (evt) => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
            closeSuccessPopup();
        }
    };

    return (
        <div className="popup" style={{display:successPopupDisplay }} onClick={onConfirmClick}>
            <div className={cx(`success__container`, className)}>
                <div className="popup__block">
                    {title && <h2 className="popup__title">{title}</h2>}
                </div>
                <div className="popup__dialog">
                    {textContent}
                </div>
                <button className="popup__button btn" onClick={onConfirmClick}>
                    ОК
                </button>
            </div>
        </div>
    );
};

export default SuccessPopup;
