import styled, { css } from "styled-components/native";

import { TouchableOpacity, View } from "react-native";

export type MealTypeStyleProps = "primary" | "secondary";

type Props = {
  type: MealTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  padding: 14px 16px 14px 12px;
  margin-top: 10px;

  border: 1px solid #dddedf;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text``;

export const Text = styled.Text`
  flex: 1;
  margin-left: 10px;
  padding-left: 10px;

  border-left-color: #dddedf;
  border-left-width: 1px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_3};
  `};
`;

export const Indicator = styled(View)<Props>`
  width: 14px;
  height: 14px;

  background-color: ${({ type }) =>
    type === "primary" ? "#CBE4B4" : "#F3BABD"};

  border-radius: 99999999px;
`;
