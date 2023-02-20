import { Conatiner, Description, Icon, Ifon, Title } from "./styles";

interface SelectOptionProps {
  title: string;
  descripition: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectOption({
  title,
  descripition,
  icon,
  selected,
  onClick,
}: SelectOptionProps) {
  return (
    <Conatiner onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Ifon>
        <Title>{title}</Title>
        <Description>{descripition}</Description>
      </Ifon>
    </Conatiner>
  );
}
