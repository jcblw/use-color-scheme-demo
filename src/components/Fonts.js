import styled from "styled-components";
import { DARK_LINK, LIGHT_LINK } from "../constants";
import { isDark } from "../selectors";

export const H1 = styled.h1`
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  margin: 0;
`;

export const H2 = styled.h1`
  font-size: 48px;
  line-height: 80px;
  text-align: center;
  margin: 0;
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const A = styled.a`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${props => (isDark(props) ? LIGHT_LINK : DARK_LINK)};
`;
