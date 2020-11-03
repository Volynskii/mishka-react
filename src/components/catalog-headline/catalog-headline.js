import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";
// import {addItemToBasket} from "../../redux/basket-items/actions";

export const CatalogHeadline = ({catalogItemsData,basketItems, onPushItemToBasket, addItemToBasket, ...props}) => {
console.log(addItemToBasket)
    return (
        <article className="catalog">
   <h5 className="catalog__headline">Каталог товаров</h5>

<ul className="catalog__list">
    {catalogItemsData.map((catalogItem, index) => {
        return (
           <CatalogItem
               src={catalogItemsData[index].src}
               addToBasket={addItemToBasket}
               key={catalogItemsData[index].id}
               id={catalogItemsData[index].id}
               basketItems={basketItems}
               catalogItemsData={catalogItemsData}
               name={catalogItemsData[index].itemName}
               paramOneName={catalogItemsData[index].itemParamOneName}
               paramOneValue={catalogItemsData[index].itemParamOneValue}
               paramTwoName={catalogItemsData[index].itemParamTwoName}
               paramTwoValue={catalogItemsData[index].itemParamTwoValue}
               price={catalogItemsData[index].itemPrice}
               quantity={catalogItemsData[index].itemQuantity}
           />
        )
    })}
</ul>
        </article>
    )
};
