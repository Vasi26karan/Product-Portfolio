import { createSelector } from "reselect";
import { RootState } from "../store";

const selectProductData = (state: RootState) => state.products.data;

const getProductSelector = (selector: any) =>
  createSelector(
    [
      selectProductData,
      (_: any, productId: string) => productId,
    ],
    (products, productId) => selector(products[productId])
  );

const getOverview = getProductSelector(
  (product: any) => product?.productDescription ?? []
);
const getConsumers = getProductSelector((product:any) => product?.consumers ?? []);
const getReferences = getProductSelector(
  (product: any)=> product?.references ?? []
);
const getTeamMembers = getProductSelector(
  (product: any) => product?.teamMembers ?? []
);

export { getOverview, getConsumers, getReferences, getTeamMembers };

