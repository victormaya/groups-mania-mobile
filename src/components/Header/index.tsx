import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../Button";
import Logo from "../Logo";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Logo />
      </TouchableOpacity>
      <Button label="enviar grupo" ghost />
    </Container>
  );
};

export default Header;
