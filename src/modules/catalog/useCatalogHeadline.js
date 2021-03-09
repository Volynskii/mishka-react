import {useSelector} from "react-redux";

export const useCatalogHeadline = () => {

    const catalogItems = useSelector((state) => state.basketItems.catalogItems);
    const basketItems = useSelector((state) => state.basketItems.basketItems);

    return {catalogItems,basketItems}
};
