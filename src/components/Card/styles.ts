import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ContainerCard = styled.View`
  background: ${theme.colors.light};
  width: 270px;
  height: 405px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
`;

export const BoxTagImage = styled.View`
  position: relative;
`;
export const Tag = styled.View`
  position: absolute;
  z-index: 1;
  padding: 10px;
  border-radius: 10px;
  background-color: ${theme.colors.yellow};
`;

export const TagText = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: ${theme.font.sizes.xsmall};
`;
export const ImageCard = styled.Image`
  width: 270px;
  height: 202px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const BoxTextsButton = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 5px 10px;
  padding-bottom: 15px;
`;
export const BoxTexts = styled.View``;
export const TitleCard = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: ${theme.font.sizes.small};
`;
export const TextCard = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: ${theme.font.sizes.xsmall};
`;
