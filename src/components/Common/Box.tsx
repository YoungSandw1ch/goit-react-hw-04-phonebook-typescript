import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  grid,
  GridProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  position,
  PositionProps,
} from 'styled-system';
import styled from 'styled-components';
import { ReactElement } from 'react';

interface Props
  extends ColorProps,
    BackgroundProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    ShadowProps,
    GridProps,
    FlexboxProps,
    BorderProps,
    PositionProps {
  children: ReactElement;
}

export const Box = styled.div<Props>`
  ${color};
  ${layout};
  ${shadow};
  ${grid};
  ${flexbox};
  ${background};
  ${space};
  ${position};
  ${border};
  ${typography};
  ${() => 'box-sizing: border-box;'}
`;
