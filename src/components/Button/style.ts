import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ButtonTouchableOpacity = styled.TouchableOpacity`
  background: ${theme.colors.yellow};
  height: 30px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: ${theme.border.radius};
`;

export const ButtonTouchableOpacityGhost = styled.TouchableOpacity`
  border-color: ${theme.colors.yellow};
  border-width: 1px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: ${theme.border.radius};
  `;
export const TextButton = styled.Text`
  text-transform: uppercase;
  font-size: ${theme.font.sizes.xsmall};
  font-family: "Poppins_700Bold";
  `;
export const TextButtonGhost = styled.Text`
color: ${theme.colors.yellow};
  text-transform: uppercase;
  font-size: ${theme.font.sizes.xsmall};
  font-family: "Poppins_700Bold";
`;
