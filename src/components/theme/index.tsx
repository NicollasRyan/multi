import { ReactNode } from "react";
import { Header } from "../Header";
import { SidebarItem } from "../SiderbarItem";
import { Area, Container, Page, SideBar, Steps } from "./styles";
import { useForm } from "../../contexts/FormContext";

interface Props {
  children: ReactNode;
}

export function Theme({ children }: Props) {
  const { state } = useForm();

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
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              descripition="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contato"
              descripition="Como te acha"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </SideBar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
}
