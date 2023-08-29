import React, { useCallback } from "react";
import { MovieResponse } from "lib/types/api";
import { Box, Button } from "ui-kit";
import { formatCurrency } from "utils/price";

import * as S from "./styles";
import { useCartFunctions } from "hooks/cart";
import { Cart } from "ui-kit/typography/icons";
import { useSelector } from "react-redux";
import { RootState } from "store/types";

interface MovieItemProps {
  item: MovieResponse;
}

const ProductBox: React.FC<MovieItemProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const productInCart = cartItems.find(cartItem => cartItem.id === item.id);
  const { addItemToCart, updateItemQuantity } = useCartFunctions();

  const handleAddButton = useCallback(() => {
    if (productInCart) {
      const quantity = productInCart.quantity ? productInCart.quantity : 1;
      updateItemQuantity(item.id, quantity + 1);

      return;
    }
    addItemToCart(item, 1);
  }, [productInCart]);

  return (
    <S.ProductBoxContainer>
      <S.ProductBoxImage src={item.image} alt={item.title} />
      <S.ProductBoxTitle>{item.title}</S.ProductBoxTitle>
      <S.ProductBoxPrice>{formatCurrency(item.price)}</S.ProductBoxPrice>
      <Button
        onClick={handleAddButton}
        $itemInCart={productInCart ? true : false}
      >
        <Box display="flex" alignItems="center">
          <Cart />
          {productInCart?.quantity || 0}
        </Box>
        {productInCart ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
      </Button>
    </S.ProductBoxContainer>
  );
};

export default ProductBox;
