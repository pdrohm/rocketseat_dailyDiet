import { Container, ReturnIcon, Title, ReturnButton } from "./styles";

import { useNavigation } from "@react-navigation/native";

type SecondaryHeaderProps = {
  title: String;
};

export const SecondaryHeader = ({ title }: SecondaryHeaderProps) => {
  const { navigate } = useNavigation();

  const handleReturnHome = () => {
    navigate("home");
  };

  return (
    <Container>
      <ReturnButton onPress={handleReturnHome}>
        <ReturnIcon />
      </ReturnButton>
      <Title>{title}</Title>
    </Container>
  );
};
