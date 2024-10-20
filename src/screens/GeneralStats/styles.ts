import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  width: 100%;
  height: 140px;

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StatsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const StatsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.RED_DARK,
}))``;

export const ReturnButton = styled(TouchableOpacity)`
  position: absolute;
  left: 29px;
  top: 20px;
`;

export const Stats = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  align-items: center;
`;

export const StatsSubtitle = styled.Text`
  margin: 20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const InfoBlock = styled.View`
  width: 100%;
  height: 89px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;

  margin-top: 10px;
`;

export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};

  margin-bottom: 6px;
`;

export const InfoView = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
