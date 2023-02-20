import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/theme";
import { useForm, FormAction } from "../../contexts/FormContext";

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

export function FormStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setGithub,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/finished");
      console.log(state);
    } else {
      alert("Preencha os dados.");
    }
  };

  return (
    <Theme>
      <Conatiner>
        <BoxText>
          <Step>Passo 3/3</Step>
          <Title>Proto {state.name}, onde te achamos?</Title>
          <Description>
            Preencha com seus contatos para conseguir entra em contato com voçê.
          </Description>
        </BoxText>

        <Label>
          Qual é seu email?
          <Input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </Label>

        <Label>
          Qual é seu Github?
          <Input
            type="url"
            autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </Label>

        <BackButton to="/step2">Voltar</BackButton>
        <Button onClick={handleNextStep}>Pronto</Button>
      </Conatiner>
    </Theme>
  );
}
