import React,{Fragment} from "react";
import './week-product.scss'

export const WeekProduct = () => {
    return <Fragment>
        <article className="week-product">
            <section className="week-product__description">
                <ul className="week-product__description__headline-block">
                    <li className="week-product__description__headline-block__name">ТОВАР НЕДЕЛИ
                    </li>
                    <li className="week-product__description__headline-block__headline">
                        Вязаные корзинки
                    </li>
                </ul>
                <div className="week-product__description__wrapper">
                <p className="week-product__description__text">Экологически чистая пряжа, ручная работа.
                    Доступны в шести расцветках и трех размерах.</p>
                <table className="week-product__description__price">
                    <tbody>
                    <tr>
                        <td className="week-product__description__price__param">Цвет:</td>
                        <td className="week-product__description__price__param-two">«Тиффани»/серый</td>
                    </tr>
                    <tr>
                        <td className="week-product__description__price__param">Диаметр</td>
                        <td className="week-product__description__price__param-two">25 см</td>
                    </tr>
                    <tr>
                        <td className="week-product__description__price__param">Высота:</td>
                        <td className="week-product__description__price__param-two">15 см</td>
                    </tr>
                    </tbody>
                </table>
<ul className="week-product__description__order">
    <li className="week-product__description__order__price">Цена: 990 руб.</li>
    <li className="week-product__description__order__button">ЗАКАЗАТЬ</li>
</ul>
                </div>
            </section>

            <section className="week-product__picture"/>
        </article >

    </Fragment>
};
