import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../Button";
import Logo from "../Logo";

import { Container, LogoTextTitle, TextTitle } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoTextTitle>
        <Logo />
        <TextTitle>GroupasMania</TextTitle>
      </LogoTextTitle>
      <Button label="enviar grupo" ghost />
    </Container>
  );
};

export default Header;
