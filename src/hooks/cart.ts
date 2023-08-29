import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} from "store/cart/actions";
import { CartItem } from "store/cart/types";
import { RootState } from "store/types";

export function useCartFunctions() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(
    "🚀 ~ file: cart.ts:8 ~ useCartFunctions ~ cartItems:",
    cartItems
  );
  const dispatch = useDispatch();

  const addItemToCart = (item: CartItem, quantity = 1) => {
    dispatch(addToCart(item, quantity));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    dispatch(updateCartItemQuantity(id, quantity));
  };

  const clearCart = () => {
    cartItems.forEach(item => {
      dispatch(removeFromCart(item.id));
    });
  };

  return { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart };
}
