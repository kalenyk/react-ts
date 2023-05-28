import {
  Link,
  Paragraph2,
  Paragraph2Bold,
} from "../../../design-system/typography";
import { RoundImage } from "../../../design-system/utils";
import User from "../../../types/User";
import { Email, NameWrapper } from "./style";
import UserImage from "../../../assets/images/avatar-placeholder.svg";
type UserRowDataProps = {
  user: User;
};

function UserRowData({ user }: UserRowDataProps) {
  const { name, email, username, address, company, phone, website } = user;

  return (
    <>
      <NameWrapper>
        <RoundImage src={UserImage} />
        <Paragraph2Bold>{name}</Paragraph2Bold>
      </NameWrapper>
      <Email>{email}</Email>
      <Paragraph2>{username}</Paragraph2>
      <Paragraph2>
        <Link href={`tel:${phone}`}>{phone}</Link>
      </Paragraph2>
      <Paragraph2>
        <Link href={`https://${website}`} target="__blank">
          {website}
        </Link>
      </Paragraph2>
      <Paragraph2>{address?.city}</Paragraph2>
      <Paragraph2>{company?.name}</Paragraph2>
    </>
  );
}

export default UserRowData;
