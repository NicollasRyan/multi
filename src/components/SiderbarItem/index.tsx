import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";

import {
  Container,
  Description,
  IconArea,
  Info,
  LinkSideber,
  Title,
} from "./styles";

interface SidebarItemProps {
  title: string;
  descripition: string;
  icon: string;
  path: string;
  active: boolean;
}

export function SidebarItem({
  title,
  descripition,
  icon,
  path,
  active,
}: SidebarItemProps) {
  return (
    <Container>
      <LinkSideber to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{descripition}</Description>
        </Info>
        <IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}

          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}

          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}
        </IconArea>
      </LinkSideber>
    </Container>
  );
}
