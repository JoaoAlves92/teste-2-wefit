import styled from "styled-components";
import { Box, Text } from "ui-kit";

export const EmptyContainer = styled(Box)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 64px;
`;

export const EmptyTitle = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const ButtonContainer = styled(Box)`
  width: 180px;
`;
