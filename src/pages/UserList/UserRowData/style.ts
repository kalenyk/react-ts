import styled from "styled-components";
import { Paragraph2 } from "../../../design-system/typography";

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > img {
    margin-right: 8px;
  }
`;

export const Email = styled(Paragraph2)`
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
  cursor: pointer;
`;
