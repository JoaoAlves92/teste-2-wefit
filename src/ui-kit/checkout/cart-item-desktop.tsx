import React, { useCallback } from "react";
import { useCartFunctions } from "hooks/cart";
import { CartItem } from "store/cart/types";
import styled from "styled-components";
import { Box } from "ui-kit/common";
import { Trash } from "ui-kit/typography/icons";
import { Text } from "ui-kit/typography";
import { formatCurrency } from "utils/price";
import QuantitySelector from "./quantity-selector";

interface CartItemProps {
  item: CartItem;
}

const CartItemDesktopContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

const CartItemImage = styled.img`
  width: 89px;
  height: 114px;
  object-fit: cover;
`;

const CartItemTitle = styled(Text)`
  font-weight: 700;
  line-height: 32px;
`;

const CartItemPrice = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;

const CartItemDesktop: React.FC<CartItemProps> = ({ item }) => {
  const { removeItemFromCart } = useCartFunctions();

  const handleRemoveItem = useCallback(() => {
    removeItemFromCart(item.id);
  }, []);

  return (
    <CartItemDesktopContainer>
      <CartItemImage src={item.image} alt={item.title} />
      <Box>
        <CartItemTitle>{item.title}</CartItemTitle>
        <CartItemPrice>{formatCurrency(item.price)}</CartItemPrice>
      </Box>
      <Box>
        <QuantitySelector value={item.quantity || 1} item={item} />
      </Box>
      <Box>
        <CartItemPrice>
          {formatCurrency(item.price * (item.quantity || 1))}
        </CartItemPrice>
      </Box>
      <Trash onClick={handleRemoveItem} style={{ cursor: "pointer" }} />
    </CartItemDesktopContainer>
  );
};

export { CartItemDesktop };
