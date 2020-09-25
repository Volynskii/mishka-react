import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";

export const CatalogHeadline = (catalogItemsData) => {


    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    {catalogItemsData.catalogItemsData.map((catalogItem, index) => {
        return (
           <CatalogItem
               addToBasket={catalogItemsData.onPushItemToBasket}
               removeFromBasket={catalogItemsData.onRemoveItemFromBasket}
               key={index}
               index={index}
               basketItems={catalogItemsData.basketItems}
               catalogItemsData={catalogItemsData.catalogItemsData}
               name={catalogItemsData.catalogItemsData[index].itemName}
               weight={catalogItemsData.catalogItemsData[index].itemWeight}
               height={catalogItemsData.catalogItemsData[index].itemHeight}
               price={catalogItemsData.catalogItemsData[index].itemPrice}
               quantity={catalogItemsData.catalogItemsData[index].itemQuantity}

           />
        )
    })}
</ul>
        </article>
    )
};
