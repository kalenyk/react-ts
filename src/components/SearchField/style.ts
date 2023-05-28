import styled from "styled-components";

export const SearchInput = styled.input`
  outline: none;
  padding-top: ${(p) => p.theme.spacing.xs};
  padding-bottom: ${(p) => p.theme.spacing.xs};
  padding-left: ${(p) => p.theme.spacing.m};
  border: none;
  width: 214px;
  border-bottom: 1px solid ${(p) => p.theme.colors.grays[1]};
  font-size: 14px;

  &::placeholder {
    color: ${(p) => p.theme.colors.grays[1]};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
`;
