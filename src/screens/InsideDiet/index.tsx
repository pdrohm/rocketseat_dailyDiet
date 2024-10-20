import { Container, Title, Subtitle, Image } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";

import insideDiet from "../../assets/insideDiet.png";

export const InsideDiet = () => {
  const { navigate } = useNavigation();

  const handleReturnHome = () => {
    navigate("home");
  };
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua dentro da dieta! Muito bem!</Subtitle>
      <Image source={insideDiet} />
      <Button
        title="Ir para a página inicial"
        onPress={handleReturnHome}
        style={{ width: 200 }}
      />
    </Container>
  );
};
