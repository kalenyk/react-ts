import styled from "styled-components";
import { Paragraph2, Paragraph2Bold } from "../../design-system/typography";
import { Line } from "../../design-system/utils";

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.8fr 0.8fr 1.1fr 0.8fr 0.8fr;
  margin-top: ${(p) => p.theme.spacing.md};
  align-items: center;
  grid-column-gap: ${(p) => p.theme.spacing.xs};
`;

export const Divider = styled(Line)`
  grid-column-start: 1;
  grid-column-end: 8;
  margin: ${(p) => p.theme.spacing.xs} 0;
`;

export const GridTitle = styled(Paragraph2Bold)`
  margin-bottom: ${(p) => p.theme.spacing.m};
`;

export const EmptyGridMessage = styled(Paragraph2)`
  margin-top: ${(p) => p.theme.spacing.md};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 9;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & > p {
    margin-right: ${(p) => p.theme.spacing.sm};
  }

  button {
    margin-right: ${(p) => p.theme.spacing.xl};
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.spacing.md};
`;

export const GridWrapper = styled.div`
  overflow: scroll;
  height: 600px;
`;
