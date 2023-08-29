import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "ui-kit";
import { ConfirmationGuy } from "ui-kit/typography/icons";

import * as S from "./styles";

const OrderConfirmation = () => {
  return (
    <S.ConfirmationContainer>
      <S.ConfirmationTitle>Compra realizada com sucesso!</S.ConfirmationTitle>
      <Box width="50%" textAlign="center">
        <ConfirmationGuy />
      </Box>
      <Link to="/" title="Voltar">
        <S.ButtonContainer>
          <Button>VOLTAR</Button>
        </S.ButtonContainer>
      </Link>
    </S.ConfirmationContainer>
  );
};

export default OrderConfirmation;
