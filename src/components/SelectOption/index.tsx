import { Conatiner, Description, Icon, Ifon, Title } from "./styles";

interface SelectOptionProps {
  title: string;
  descripition: string;
  icon: string;
}

export function SelectOption({ title, descripition, icon }: SelectOptionProps) {
  return (
    <Conatiner>
      <Icon>{icon}</Icon>
      <Ifon>
        <Title>{title}</Title>
        <Description>{descripition}</Description>
      </Ifon>
    </Conatiner>
  );
}
