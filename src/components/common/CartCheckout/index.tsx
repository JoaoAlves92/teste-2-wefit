import React, { useCallback } from "react";
import { Box, Button, CartItemDesktop, CartProduct } from "ui-kit";
import { CartItem } from "store/cart/types";
import { formatCurrency } from "utils/price";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { useBreakpoints } from "hooks/breakpoints";
import { useCartFunctions } from "hooks/cart";

interface CartCheckoutProps {
  cartItems: CartItem[];
}

const CartCheckout: React.FC<CartCheckoutProps> = ({ cartItems }) => {
  const breakpoints = useBreakpoints();
  const { clearCart } = useCartFunctions();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  const handleResetCart = useCallback(() => {
    clearCart();
  }, []);

  return (
    <S.CartCheckoutContainer>
      {breakpoints.tablet ? (
        <>
          <S.DescriptionsGrid>
            <S.Description>PRODUTO</S.Description>
            <S.Description></S.Description>
            <S.Description>QTD</S.Description>
            <S.Description>SUBTOTAL</S.Description>
            <S.Description></S.Description>
          </S.DescriptionsGrid>
          {cartItems.map(item => (
            <CartItemDesktop key={item.id} item={item} />
          ))}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="235px">
              <Link
                to="/confirmation"
                title="Confirmação"
                onClick={handleResetCart}
              >
                <Button>FINALIZAR PEDIDO</Button>
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <S.TotalLabel style={{ marginRight: "16px" }}>TOTAL</S.TotalLabel>
              <S.TotalCost>{formatCurrency(total)}</S.TotalCost>
            </Box>
          </Box>
        </>
      ) : (
        <>
          {cartItems.map(item => (
            <CartProduct key={item.id} item={item} />
          ))}
          <Box
            height="40vh"
            display="flex"
            flexDirection="column"
            justifyContent="end"
          >
            <Box borderTop="1px solid #999999">
              <Box
                display="flex"
                alignItems="center"
                marginTop="10px"
                marginBottom="14px"
                justifyContent="end"
              >
                <S.TotalLabel style={{ marginRight: "16px" }}>
                  TOTAL
                </S.TotalLabel>
                <S.TotalCost>{formatCurrency(total)}</S.TotalCost>
              </Box>

              <Link
                to="/confirmation"
                title="Confirmação"
                onClick={handleResetCart}
              >
                <Button>FINALIZAR PEDIDO</Button>
              </Link>
            </Box>
          </Box>
        </>
      )}
    </S.CartCheckoutContainer>
  );
};

export default CartCheckout;
