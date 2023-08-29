import styled from "styled-components";
import media from "styles/media-query";
import { Box } from "ui-kit";

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Cria 3 colunas iguais
  gap: 20px; // Espaço entre as colunas

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr;
  `}
`;

export const LoaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 10rem;
`;
