import styled from "styled-components";
import { Box, Text } from "ui-kit";

export const CartCheckoutContainer = styled(Box)`
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  padding: 24px;
`;

export const DescriptionsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Description = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.theme.colors.grey};
`;

export const TotalLabel = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.theme.colors.grey};
`;

export const TotalCost = styled(Text)`
  font-size: 24px;
  font-weight: 700;
`;
