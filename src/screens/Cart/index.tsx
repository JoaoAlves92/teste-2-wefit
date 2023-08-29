import React from "react";
import { CartCheckout, EmptyCart, Header } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store/types";
import { Container } from "ui-kit";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Container>
      <Header />
      {cartItems.length === 0 ? <EmptyCart /> : <CartCheckout cartItems={cartItems} />}
    </Container>
  );
};

export default Cart;
