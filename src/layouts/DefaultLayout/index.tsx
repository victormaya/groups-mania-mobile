import Header from "../../components/Header";
import Categories from "../../components/Categories";
import { ReactElement, useContext } from "react";
import { Container } from "./styles";
import { useFonts, PassionOne_700Bold } from "@expo-google-fonts/passion-one";
import { Poppins_900Black, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  CategoryContext,
} from "../../context/CategoryContext";

function DefaultLayout({ children }: { children: ReactElement<any, any> }) {
  const { categories } = useContext(CategoryContext);

  let [fontsLoaded] = useFonts({
    PassionOne_700Bold,
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Container>
      <Header />
      <Categories data={categories} />
      {children}
    </Container>
  );
}

export default DefaultLayout;
