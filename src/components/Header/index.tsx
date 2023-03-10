import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../Button";
import Logo from "../Logo";
import { useFonts, PassionOne_700Bold } from "@expo-google-fonts/passion-one";

import { Container, LogoTextTitle, TextTitle } from "./styles";

const Header: React.FC = () => {
  let [fontsLoaded] = useFonts({
    PassionOne_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

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
