import {
  color,
  ColorProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import styled from 'styled-components';

interface Props
  extends ColorProps,
    BackgroundProps,
    SpaceProps,
    TypographyProps {
  children: string;
}

export const Title = styled.h1<Props>`
  ${color};
  ${typography};
  ${background};
  ${space};
  ${() => 'text-align: center;'}
`;

// export const Title = styled.h1(
//   {
//     textAlign: 'center',
//   },
//   ${ color };
//   typography,
//   background,
//   space
// );
