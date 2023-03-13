import React from "react";
import { IGroup } from "../../models/group";
import Button from "../Button";
import {
  BoxTagImage,
  BoxTexts,
  BoxTextsButton,
  ContainerCard,
  ImageCard,
  Tag,
  TagText,
  TextCard,
  TitleCard,
} from "./styles";

function Card({ data }: { data: IGroup }) {
  return (
    <ContainerCard>
      <BoxTagImage>
        <Tag>
          <TagText>{data.category.name}</TagText>
        </Tag>
        <ImageCard
          source={{ uri: `https://un4tel6z.directus.app/assets/${data.image}` }}
        />
      </BoxTagImage>
      <BoxTextsButton>
        <BoxTexts>
          <TitleCard numberOfLines={1}>{data.name}</TitleCard>
          <TextCard numberOfLines={5}>{data.description}</TextCard>
        </BoxTexts>
        <Button label="Entrar no grupo" />
      </BoxTextsButton>
    </ContainerCard>
  );
}

export default Card;
