import styled from "styled-components";
import { Box, Text } from "ui-kit";
import { Link } from 'react-router-dom';
import media from "styles/media-query";

export const HeaderContainer = styled.header``;

export const HeaderItems = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 0;
`;

export const HeaderSideItems = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0 10px;

  text-align: right;
`;

export const HeaderSideText = styled(Text)`
  color: ${props => props.theme.colors.white};
  font-size: 14px;

  ${media.lessThan('tablet')`
    display: none;
  `}
`;

export const HeaderSideSubText = styled(Text)`
  color: ${props => props.theme.colors.grey};
  font-size: 12px;
`;
