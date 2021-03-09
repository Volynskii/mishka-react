import './catalog-headline.scss';
import React from "react";
import CatalogItem from "./components/catalogItem";

type catalogContainerProps = {
    catalogItemsData: {
        id: number;
        src: string;
        itemPrice: number;
        itemName: string;
        itemParamOneName: string;
        itemParamOneValue: string;
        itemParamOneUnit : string;
        itemParamTwoValue: string;
        itemParamTwoName: string;
        itemParamTwoUnit: string;
        itemQuantity: number;}[];

    basketItemsData: {
            id: number;
            src: string;
            itemPrice: number;
            itemName: string;
            itemParamOneName: string;
            itemParamOneValue: string;
            itemParamOneUnit : string;
            itemParamTwoValue: string;
            itemParamTwoName: string;
            itemParamTwoUnit: string;
            itemQuantity: number;}[];

}

export const CatalogHeadline: React.FC<catalogContainerProps> = ({catalogItemsData,basketItemsData}) => {

    return (
        <article className="catalog">
            <div className="catalog__headline">Каталог товаров

            </div>
            <ul className="catalog__list">
                {catalogItemsData.map((catalogItem: {
                    id: number;
                    src: string;
                    itemPrice: number;
                    itemName: string;
                    itemParamOneName: string;
                    itemParamOneValue: string;
                    itemParamOneUnit : string;
                    itemParamTwoValue: string;
                    itemParamTwoName: string;
                    itemParamTwoUnit: string;
                    itemQuantity: number;
                },


                ) => {
                    return (

                        <CatalogItem
                            key={catalogItem.id}
                            basketItem={basketItemsData}
                            catalogItem={catalogItem}
                        />
                    );
                })}
            </ul>
        </article>
    )
};
