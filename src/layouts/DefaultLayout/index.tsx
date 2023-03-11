import Header from "../../components/Header";
import Categories from "../../components/Categories";
import { ReactElement, useContext } from "react";
import { Container } from "./styles";
import { useFonts, PassionOne_700Bold } from "@expo-google-fonts/passion-one";
import { Poppins_900Black } from "@expo-google-fonts/poppins";
import {
  CategoryContext,
  CategoryContextProvider,
} from "../../context/CategoryContext";

function DefaultLayout({ children }: { children: ReactElement<any, any> }) {
  const { categories } = useContext(CategoryContext);
  console.log("🚀 ~ file: index.tsx:14 ~ DefaultLayout ~ categories:", categories)


  let [fontsLoaded] = useFonts({
    PassionOne_700Bold,
    Poppins_900Black,
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
