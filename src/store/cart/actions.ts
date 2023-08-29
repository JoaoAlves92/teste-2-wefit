import { CartActionTypes, CartItem, CartAction } from "./types";

export const addToCart = (item: CartItem, quantity: number): CartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: { ...item, quantity },
});

export const updateCartItemQuantity = (
  id: number,
  quantity: number
): CartAction => ({
  type: CartActionTypes.UPDATE_CART_ITEM_QUANTITY,
  payload: { id, quantity },
});

export const removeFromCart = (id: number): CartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: id,
});
