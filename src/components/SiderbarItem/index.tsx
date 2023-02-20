import { Link } from "react-router-dom";
import {
  Container,
  Description,
  IconArea,
  Info,
  LinkSideber,
  Point,
  Title,
} from "./styles";

interface SidebarItemProps {
  title: string;
  descripition: string;
  icon: string;
  path: string;
}

export function SidebarItem({
  title,
  descripition,
  icon,
  path,
}: SidebarItemProps) {
  return (
    <Container>
      <LinkSideber to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{descripition}</Description>
        </Info>
        <IconArea></IconArea>
        <Point></Point>
      </LinkSideber>
    </Container>
  );
}
