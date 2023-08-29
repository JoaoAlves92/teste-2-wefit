import styled from "styled-components";
import { Box, Text } from "ui-kit";

export const ProductBoxContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 10px;
  gap: 8px;
`;

export const ProductBoxImage = styled.img`
  width: 148px;
  height: 188px;
`;

export const ProductBoxTitle = styled(Text)`
  font-weight: 700;
  font-size: 12px;
`;

export const ProductBoxPrice = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;
