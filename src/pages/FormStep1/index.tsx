import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/theme";
import { useForm, FormAction } from "../../contexts/FormContext";

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

export function FormStep1() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Digite seu nome");
    }
  };

  return (
    <Theme>
      <Conatiner>
        <BoxText>
          <Step>Passo 1/3</Step>
          <Title>Vamos começar com seu nome</Title>
          <Description>
            Preencha o campo abaixo com seu nome completo.
          </Description>
        </BoxText>

        <Label>
          Seu Nome completo
          <Input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </Label>

        <Button onClick={handleNextStep}>Próximo</Button>
      </Conatiner>
    </Theme>
  );
}
