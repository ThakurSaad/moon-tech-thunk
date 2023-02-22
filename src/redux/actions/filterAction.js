import { TOGGLE_BRAND } from "../actionTypes/actionTypes";

export const toggleFilter = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
