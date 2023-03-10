import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ContainerCategory = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;;
`;

export const IconCategory = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.yellow};
  border-radius: 5px;
`;
export const TextCategory = styled.Text`
  text-transform: uppercase;
  font-size: ${theme.font.sizes.small};
  font-family: "Poppins_900Black";
  color: ${theme.colors.white};
`;
