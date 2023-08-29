import React, { useMemo } from "react";
import { Box, Title } from "ui-kit";
import { Basket } from "ui-kit/typography/icons";

import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "store/types";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  }, [cartItems]);

  return (
    <S.HeaderContainer>
      <S.HeaderItems>
        <Title>WeMovies</Title>
        <S.HeaderSideItems to="/cart" title="Carrinho">
          <Box>
            <S.HeaderSideText>Meu carrinho</S.HeaderSideText>
            <S.HeaderSideSubText>
              {totalQuantity} {totalQuantity === 1 ? "item" : "itens"}
            </S.HeaderSideSubText>
          </Box>
          <Box>
            <Basket />
          </Box>
        </S.HeaderSideItems>
      </S.HeaderItems>
    </S.HeaderContainer>
  );
};

export default Header;
