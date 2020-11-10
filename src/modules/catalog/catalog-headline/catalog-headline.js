import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";

export const CatalogHeadline = ({catalogItemsData,basketItemsData,  addItemToBasket, dispatch, useCallback}) => {

    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    {catalogItemsData.map((catalogItem, index) => {
        return (

           <CatalogItem
               src={catalogItemsData[index].src}
               dispatch={dispatch}
               addToBasket={addItemToBasket}
               key={catalogItemsData[index].id}
               id={catalogItemsData[index].id}
               basketItems={basketItemsData}
               catalogItems={catalogItemsData}
               name={catalogItemsData[index].itemName}
               paramOneName={catalogItemsData[index].itemParamOneName}
               paramOneValue={catalogItemsData[index].itemParamOneValue}
               paramOneUnit={catalogItemsData[index].itemParamOneUnit}
               paramTwoName={catalogItemsData[index].itemParamTwoName}
               paramTwoValue={catalogItemsData[index].itemParamTwoValue}
               paramTwoUnit={catalogItemsData[index].itemParamTwoUnit}
               price={catalogItemsData[index].itemPrice}
               quantity={catalogItemsData[index].itemQuantity}
           />
        )
    })}
</ul>
        </article>
    )
};
