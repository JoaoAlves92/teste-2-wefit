import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "ui-kit";
import { NoFindLady } from "ui-kit/typography/icons";

import * as S from "./styles";

const EmptyCart = () => {
  return (
    <S.EmptyContainer>
      <S.EmptyTitle>{`Parece que não há nada por aqui :(`}</S.EmptyTitle>
      <Box width="50%" textAlign="center" borderBottom="1px solid black">
        <NoFindLady />
      </Box>
      <Link to="/" title="Voltar">
        <S.ButtonContainer>
          <Button>VOLTAR</Button>
        </S.ButtonContainer>
      </Link>
    </S.EmptyContainer>
  );
};

export default EmptyCart;
