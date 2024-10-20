import { TouchableOpacityProps } from "react-native";

import {
  Container,
  ButtonTypeStyleProps,
  Title,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: "plus" | "trash" | "pencil";
  type?: ButtonTypeStyleProps;
};

export const Button = ({
  title,
  type = "primary",
  icon,
  ...rest
}: ButtonProps) => {
  const IconColor = type === "primary" ? "#EFF0F0" : "#1B1D1E";

  return (
    <Container {...rest} type={type}>
      {icon === "plus" && <PlusIcon color={IconColor} />}
      {icon === "trash" && <TrashIcon color={IconColor} />}
      {icon === "pencil" && <PencilIcon color={IconColor} />}
      <Title
        style={type === "primary" ? { color: "#EFF0F0" } : { color: "#1B1D1E" }}
      >
        {title}
      </Title>
    </Container>
  );
};
