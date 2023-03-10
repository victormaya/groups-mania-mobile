import Header from "../../components/Header";
import Categories from "../../components/Categories";
import { ReactElement } from "react";
import { Container } from "./styles";
import { useFonts, PassionOne_700Bold } from "@expo-google-fonts/passion-one";
import { Poppins_900Black } from "@expo-google-fonts/poppins";
import { CategoryContextProvider } from "../../context/CategoryContext";

function DefaultLayout({ children }: { children: ReactElement<any, any> }) {
  let [fontsLoaded] = useFonts({
    PassionOne_700Bold,
    Poppins_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <CategoryContextProvider>
      <Container>
        <Header />
        <Categories />
        {children}
      </Container>
    </CategoryContextProvider>
  );
}

export default DefaultLayout;
