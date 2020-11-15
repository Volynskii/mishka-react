import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";

export const CatalogHeadline = ({catalogItemsData,basketItemsData}) => {

    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    {catalogItemsData.map((catalogItem, index) => {
        return (

           <CatalogItem
                key={catalogItemsData[index].id}
               basketItems={basketItemsData}
               catalogItems={catalogItem}
           />
        )
    })}
</ul>
        </article>
    )
};
