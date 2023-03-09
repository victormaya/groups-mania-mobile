import Header from "../../components/Header";
import { ReactElement } from "react";
import { Container } from "./styles";

function DefaultLayout({ children }: { children: ReactElement<any, any> }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default DefaultLayout;
