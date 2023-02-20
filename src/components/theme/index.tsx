import { ReactNode } from "react";
import { Header } from "../Header";
import { SidebarItem } from "../SiderbarItem";
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
          <SideBar>
            <SidebarItem
              title="Pessoal"
              descripition="Se indetifique"
              icon="profile"
              path="/"
            />

            <SidebarItem
              title="Profissional"
              descripition="Seu nivel"
              icon="book"
              path="/step2"
            />

            <SidebarItem
              title="Contato"
              descripition="Como te acha"
              icon="mail"
              path="/step3"
            />
          </SideBar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
}
