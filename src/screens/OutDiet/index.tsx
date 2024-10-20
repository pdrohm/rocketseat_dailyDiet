import { Container, Title, Subtitle, Image } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";

import outDiet from "../../assets/outDiet.png";

export const OutDiet = () => {
  const { navigate } = useNavigation();

  const handleReturnHome = () => {
    navigate("home");
  };

  return (
    <Container>
      <Title>Que pena!</Title>
      <Subtitle>
        Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
      </Subtitle>
      <Image source={outDiet} />
      <Button
        title="Ir para a página inicial"
        onPress={handleReturnHome}
        style={{ width: 200 }}
      />
    </Container>
  );
};
