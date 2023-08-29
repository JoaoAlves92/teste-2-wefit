import React, { useCallback } from "react";
import styled from "styled-components";
import { useCartFunctions } from "hooks/cart";
import { CartItem } from "store/cart/types";
import { Box } from "ui-kit/common";
import { Trash } from "ui-kit/typography/icons";
import { formatCurrency } from "utils/price";
import QuantitySelector from "./quantity-selector";
import { Text } from "ui-kit/typography";

interface CartItemProps {
  item: CartItem;
}

const CartItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 64px;
  height: 82px;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  height: 78px;
`;

const ProductTitle = styled(Text)`
  margin: 0;
  font-weight: 700;
`;

const ProductPrice = styled(Text)`
  margin: 0;
  font-weight: bold;
`;

const ProductInfoVertical = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ProductActionSeparator = styled(Box)`
  display: flex;
  gap: 28px;
`;

const SubtotalLabel = styled(Text)`
  color: ${props => props.theme.colors.grey};
  font-weight: 700;
  font-size: 12px;
`;

const CartProduct: React.FC<CartItemProps> = ({ item }) => {
  const { removeItemFromCart } = useCartFunctions();

  const handleRemoveItem = useCallback(() => {
    removeItemFromCart(item.id);
  }, []);

  return (
    <CartItemContainer>
      <ProductImage src={item.image} alt={item.title} />
      <ProductInfo>
        <ProductInfoVertical>
          <ProductTitle>{item.title}</ProductTitle>
          <QuantitySelector value={item.quantity || 1} item={item} />
        </ProductInfoVertical>
        <ProductInfoVertical>
          <ProductActionSeparator>
            <ProductPrice>{formatCurrency(item.price)}</ProductPrice>
            <Trash onClick={handleRemoveItem} style={{ cursor: "pointer" }} />
          </ProductActionSeparator>

          <Box alignSelf="end">
            <SubtotalLabel>SUBTOTAL</SubtotalLabel>
            <ProductPrice>
              {formatCurrency(item.price * (item.quantity || 1))}
            </ProductPrice>
          </Box>
        </ProductInfoVertical>
      </ProductInfo>
    </CartItemContainer>
  );
};

export { CartProduct };
