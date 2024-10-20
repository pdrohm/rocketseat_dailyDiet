import { Container, Button, ButtonText, Title } from "./styles";

type OptionsProps = {
  option: "inside" | "out" | "";
  changeOption: (option: "inside" | "out" | "") => void;
};

export const Options = ({ changeOption, option }: OptionsProps) => {
  return (
    <Container>
      <Title>Está dentro da dieta?</Title>

      <Button
        onPress={() => changeOption("inside")}
        color={option === "inside" ? "#639339" : "#E5F0DB"}
        style={{ backgroundColor: "#E5F0DB" }}
      >
        <ButtonText>Sim</ButtonText>
      </Button>
      <Button
        onPress={() => changeOption("out")}
        color={option === "out" ? "#BF3B44" : "#EFF0F0"}
        style={{ backgroundColor: "#EFF0F0" }}
      >
        <ButtonText>Não</ButtonText>
      </Button>
    </Container>
  );
};
