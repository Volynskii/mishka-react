import React, { useEffect } from "react";
import "./popup.scss";
import cx from "classnames";

const Popup = ({ className, title, children, onConfirm }) => {
  useEffect(() => {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape`) {
        onConfirm();
      }
    };
    document.addEventListener(`keydown`, onEscKeyDown);
    return () => document.removeEventListener(`keydown`, onEscKeyDown);
  }, []);

  const onConfirmClick = (evt) => {
    evt.stopPropagation();
    if (evt.target === evt.currentTarget) {
      onConfirm();
    }
  };

  return (
    <div className="popup" onClick={onConfirmClick}>
      <div className={cx(`popup__container`, className)}>
        <div className="popup__block">
          {title && <h2 className="popup__title">{title}</h2>}
          {children}
        </div>
        <div className="popup__dialog">
          Ваш отзыв отправлен!Ваш отзыв отправлен!
          <button className="popup__button btn" onClick={onConfirmClick}>
            ОК
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
