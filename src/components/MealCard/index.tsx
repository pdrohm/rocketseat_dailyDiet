import { Container, Text, Time, Indicator } from "./styles";

import { TouchableOpacityProps } from "react-native";

import { MealTypeStyleProps } from "./styles";

interface MealCardProps extends TouchableOpacityProps {
  text: String;
  time: String;
  type?: MealTypeStyleProps;
}

export const MealCard = ({
  text,
  time,
  type = "primary",
  ...rest
}: MealCardProps) => {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Text>{text}</Text>
      <Indicator type={type}></Indicator>
    </Container>
  );
};
