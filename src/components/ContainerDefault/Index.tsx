import React from "react";
import { View } from "react-native";
import { Container } from "./styles";

function ContainerDefault({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default ContainerDefault;
