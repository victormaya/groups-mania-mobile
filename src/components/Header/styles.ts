import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  background: ${theme.colors.black};
  margin-top: 10%;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const LogoTextTitle = styled.TouchableOpacity`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
export const TextTitle = styled.Text`
  font-family: 'PassionOne_700Bold';
  font-size: 22px;
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.white};
`;
