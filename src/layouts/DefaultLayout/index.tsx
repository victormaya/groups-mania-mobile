import Header from "../../components/Header";
import Categories from "../../components/Categories";
import { ReactElement } from "react";
import { Container } from "./styles";

function DefaultLayout({ children }: { children: ReactElement<any, any> }) {
  return (
    <Container>
      <Header />
      <Categories />
      {children}
    </Container>
  );
}

export default DefaultLayout;
