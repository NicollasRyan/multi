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
  const handleNextStep = () => {};

  return (
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
        <Input />
      </Label>

      <Button onClick={handleNextStep}>Próximo</Button>
    </Conatiner>
  );
}
