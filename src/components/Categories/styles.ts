import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ContainerCategories = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  border-bottom-color: ${theme.colors.yellow};
  border-bottom-width: 1px;
  position: relative;
  min-height: 155px;
  max-height: 40%;
  position: absolute;
  top: 101px;
  z-index: 10;
  width: 100%;
  background: ${theme.colors.dark};
`;
export const CategoriesText = styled.Text`
  font-family: "Poppins_900Black";
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.small};
  text-transform: uppercase;
`;
export const Ball = styled.View`
  background: ${theme.colors.yellow};
  width: 35px;
  height: 35px;
  position: absolute;
  border-radius: 50%;
  bottom: -17.5px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.View<{ opened: boolean }>`
  width: 0px;
  height: 0px;
  border-left-width: 10px;
  border-left-color: transparent;
  border-right-width: 10px;
  border-right-color: transparent;
  border-bottom-width: 14px;
  border-bottom-color: ${theme.colors.black};
  position: relative;
  top: ${(props) => (props.opened ? "2px" : "-2px")};
  transform: ${(props) => props.opened && "rotate(180deg)"};
`;
export const FlatListCategory = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
