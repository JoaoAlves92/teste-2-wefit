export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity?: number | undefined;
  image?: string | undefined;
}

export interface CartItemToUpdate {
  id: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY",
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: number; // id
}

interface UpdateCartItemQuantity {
  type: CartActionTypes.UPDATE_CART_ITEM_QUANTITY;
  payload: CartItemToUpdate;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemQuantity;
