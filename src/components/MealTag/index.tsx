import { Container, Indicator, Text } from "./styles";

type MealTagProps = {
  isInDiet?: boolean;
};

export const MealTag = ({ isInDiet = false }: MealTagProps) => {
  return (
    <Container style={{ backgroundColor: isInDiet ? "#E5F0DB" : "#F4E6E7" }}>
      <Indicator
        style={{ backgroundColor: isInDiet ? "#639339" : "#BF3B44" }}
      />
      <Text>{isInDiet ? "dentro da dieta" : "fora da dieta"}</Text>
    </Container>
  );
};
