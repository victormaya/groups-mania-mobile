import React from "react";
import { Title } from "./styles";

// import { Container } from './styles';

function TitlePage({ title }: { title: string }) {
  return <Title>{title}</Title>;
}

export default TitlePage;
