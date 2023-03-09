import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ContainerLogo = styled.View`
  width: 30px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
`;
export const View1 = styled.View`
  width: 15px;
  height: 15px;
  background: ${theme.colors.dark};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0px;
`;
export const View2 = styled.View`
  width: 15px;
  height: 15px;
  background: ${theme.colors.yellow};
  border-top-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
`;
export const View3 = styled.View`
  width: 15px;
  height: 15px;
  background: ${theme.colors.dark};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
`;
export const View4 = styled.View`
  width: 15px;
  height: 15px;
  background: ${theme.colors.dark};
  border-radius: 0px 5px 5px 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
