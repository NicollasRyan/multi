import { ReactNode } from "react";
import { Header } from "../Header";
import { Area, Container, Page, SideBar, Steps } from "./styles";

interface Props {
  children: ReactNode;
}

export function Theme({ children }: Props) {
  return (
    <Container>
      <Area>
        <Header />
        <Steps>
          <SideBar></SideBar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
}
