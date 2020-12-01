import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";

export const CatalogHeadline = ({catalogItemsData,basketItemsData}) => {

    return (
        <article className="catalog">
            <div className="catalog__headline">Каталог товаров
   {/*<h5>Каталог товаров</h5>*/}
            </div>
<ul className="catalog__list">
    {catalogItemsData.map((catalogItem, index) => {
        return (

            <CatalogItem
        key={catalogItemsData[index].id}
        basketItem={basketItemsData}
        catalogItem={catalogItem}
        />
        );
    })}
</ul>
        </article>
    )
};
