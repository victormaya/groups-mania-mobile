import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ButtonTouchableOpacity = styled.TouchableOpacity``;

export const ButtonTouchableOpacityGhost = styled.TouchableOpacity`
  background: ${theme.colors.yellow};
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
  font-family: 'Poppins_900Black';
`;
