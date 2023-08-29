import { useCartFunctions } from "hooks/cart";
import React from "react";
import { CartItem } from "store/cart/types";
import styled from "styled-components";
import { Box } from "ui-kit/common";

interface QuantitySelectorProps {
  value: number;
  item: CartItem;
}

const QuantitySelectorWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 16px;
  width: 62px;
  height: 26px;
  text-align: center;
`;

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ value, item }) => {
  const { updateItemQuantity } = useCartFunctions();
  const handleDecrease = () => {
    if (value > 1) {
      updateItemQuantity(item.id, (item.quantity || 1) - 1);
    }
  };

  const handleIncrease = () => {
    updateItemQuantity(item.id, (item.quantity || 1) + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    updateItemQuantity(item.id, newValue);
  };

  return (
    <QuantitySelectorWrapper>
      <QuantityButton onClick={handleDecrease}>-</QuantityButton>
      <QuantityInput
        type="number"
        value={value}
        onChange={handleInputChange}
        min={1}
      />
      <QuantityButton onClick={handleIncrease}>+</QuantityButton>
    </QuantitySelectorWrapper>
  );
};

export default QuantitySelector;
