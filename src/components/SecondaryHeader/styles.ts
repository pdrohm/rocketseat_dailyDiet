import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;

  position: relative;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))``;

export const ReturnButton = styled(TouchableOpacity)`
  height: 20px;
  width: 20px;
  position: absolute;
  left: 24px;

  z-index: 999;
  elevation: 999;
`;
