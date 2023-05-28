import styled from "styled-components";

export const Heading1 = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 130%;
  font-weight: 400;
`;

export const Heading1Bold = styled(Heading1)`
  font-weight: 700;
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-size: 26px;
  line-height: 130%;
  font-weight: 400;
`;

export const Heading2Bold = styled(Heading2)`
  font-weight: 700;
`;

export const Heading3Bold = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
`;

export const Heading4 = styled.h4`
  margin: 0;
  font-size: 22px;
  line-height: 130%;
  font-weight: 400;
`;

export const Heading4Bold = styled(Heading4)`
  font-weight: 700;
`;

export const Heading5 = styled.h5`
  margin: 0;
  font-size: 18px;
  line-height: 130%;
  font-weight: 400;
`;

export const Heading5Bold = styled(Heading5)`
  font-weight: 700;
`;

export const Paragraph1 = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const Paragraph1Bold = styled.p`
  font-weight: 700;
`;

export const Paragraph2 = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  overflow-wrap: break-word;
`;

export const Paragraph2Bold = styled(Paragraph2)`
  font-weight: 700;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
`;

export const LabelBold = styled(Label)`
  font-weight: 700;
`;

export const LabelBig = styled(LabelBold)`
  font-size: 14px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};

  &:active {
    color: initial;
  }
`;

export const LabelSmall = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grays[4]};
`;

export const LabelSmallBold = styled(LabelSmall)`
  color: ${(p) => p.theme.colors.black};
  font-weight: 700;
`;

export const PrimaryLink = styled(Link)`
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.colors.error};
  margin: 4px 0;
  align-self: flex-start;
`;
