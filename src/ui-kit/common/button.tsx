import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "blue" | "green";
  onClick?: () => void;
  $itemInCart?: boolean;
}

const getColorStyles = (variant: string) => {
  switch (variant) {
    case "blue":
      return css`
        background-color: ${props => props.theme.colors.primary};
      `;
    case "green":
      return css`
        background-color: ${props => props.theme.colors.secondary};
      `;
    default:
      return css`
        background-color: ${props => props.theme.colors.primary};
      `;
  }
};

const Button = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 4px;
  border: none;
  padding: 8px;
  cursor: pointer;
  height: 40px;
  color: ${props => props.theme.colors.white};

  &:hover {
    opacity: 0.9;
  }

  ${props => getColorStyles(props.variant || "blue")};

  ${props =>
    props.$itemInCart &&
    css`
      background-color: ${props => props.theme.colors.secondary};
    `}
`;

export { Button };
