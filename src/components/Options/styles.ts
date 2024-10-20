import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

type ButtonProps = {
  color: "#639339" | "#E5F0DB" | "#BF3B44" | "#EFF0F0";
};

export const Container = styled.View`
  width: 100%;
  height: 76px;
  margin-top: 25px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};

  top: 0;
  left: 0;
  position: absolute;
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  border-radius: 6px;
  height: 50px;
  width: 49%;

  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ color }) => color};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
`;
