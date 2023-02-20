import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormAction } from "../../contexts/FormContext";
import { SelectOption } from "../../components/SelectOption";

import {
  BoxText,
  Button,
  Conatiner,
  Description,
  Input,
  Label,
  Step,
  Title,
} from "./styles";

export function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Digite seu nome");
    }
  };

  return (
    <Conatiner>
      <BoxText>
        <Step>Passo 2/3</Step>
        <Title>Vamos começar com seu nome</Title>
        <Description>
          Preencha o campo abaixo com seu nome completo.
        </Description>
      </BoxText>

      <SelectOption
        title="Sou iniciante"
        descripition="Comecei a programar há menos de 2 anos"
        icon="🥳"
      />

      <SelectOption
        title="Sou Programador"
        descripition="Já programo há 2 anos ou mais"
        icon="😎"
      />

      <Button onClick={handleNextStep}>Próximo</Button>
    </Conatiner>
  );
}
