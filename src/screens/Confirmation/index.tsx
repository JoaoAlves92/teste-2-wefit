import React from "react";
import { Header, OrderConfirmation } from "components";
import { Container } from "ui-kit";

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Header />
      <OrderConfirmation />
    </Container>
  );
};

export default Confirmation;
