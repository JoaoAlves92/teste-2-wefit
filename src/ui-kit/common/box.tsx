import styled from "styled-components";
import {
  background,
  space,
  color,
  border,
  layout,
  flex,
  flexbox,
  grid,
  position,
  typography,
  BackgroundProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  TypographyProps,
} from "styled-system";

interface BoxProps
  extends BackgroundProps,
    SpaceProps,
    ColorProps,
    BorderProps,
    LayoutProps,
    FlexProps,
    FlexboxProps,
    GridProps,
    PositionProps,
    TypographyProps {
  children?: React.ReactNode;
}

const Box = styled.div<BoxProps>`
  box-sizing: border-box;

  ${background};
  ${space};
  ${color};
  ${border};
  ${layout};
  ${flex};
  ${flexbox};
  ${grid};
  ${position};
  ${typography};
`;

export default Box;
