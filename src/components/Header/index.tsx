import { Container, Logo, ProfileImage } from "./styles";

import logo from "@assets/logo.png";
import profileImage from "@assets/profileImage.png";

export const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <ProfileImage source={profileImage} />
    </Container>
  );
};
