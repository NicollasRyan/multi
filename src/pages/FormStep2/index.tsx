import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormAction } from "../../contexts/FormContext";
import { SelectOption } from "../../components/SelectOption";

import {
  BackButton,
  BoxText,
  Button,
  Conatiner,
  Description,
  Input,
  Label,
  Step,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import { Theme } from "../../components/theme";

export function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
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

  const setLevel = (level: number) => {
    dispatch({
      type: FormAction.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <Conatiner>
        <BoxText>
          <Step>Passo 2/3</Step>
          <Title>{state.name}, o que melhor descreve voçê?</Title>
          <Description>
            Selecione a opção que melhor condiz com seu estado atual.
          </Description>
        </BoxText>

        <SelectOption
          title="Sou iniciante"
          descripition="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou Programador"
          descripition="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <BackButton to="/">Voltar</BackButton>
        <Button onClick={handleNextStep}>Próximo</Button>
      </Conatiner>
    </Theme>
  );
}
