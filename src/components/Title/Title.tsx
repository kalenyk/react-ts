import { Paragraph2Bold } from "../../design-system/typography";
import Container from "./style";

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <Container>
      <Paragraph2Bold>{title}</Paragraph2Bold>
    </Container>
  );
}

export default Title;
