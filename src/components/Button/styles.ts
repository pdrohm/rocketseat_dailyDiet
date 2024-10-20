import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Trash, PencilLine, Plus } from "phosphor-react-native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_7};
  color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_1};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 20px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    margin-left: 10px;
  `};
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 22,
}))``;

export const PencilIcon = styled(PencilLine).attrs(({ theme }) => ({
  size: 22,
}))``;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 22,
}))``;
