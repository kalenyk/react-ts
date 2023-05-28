import styled from "styled-components";

type ButtonProps = {
  secondary: boolean;
  width: string;
};

export const Button = styled.button<ButtonProps>`
	cursor pointer;
	border-radius: 30px;
	background: ${(p) =>
    p.secondary ? p.theme.colors.white : p.theme.colors.primary};
	border: 2px solid ${(p) =>
    p.secondary ? p.theme.colors.primary : "transparent"};
	color: ${(p) => (p.secondary ? p.theme.colors.black : p.theme.colors.white)};
	font-weight: 700;
	font-size: 16px;
	padding: 17px 0;
	width: ${(p) => p.width || "280px"};
	transition: ${(p) => p.theme.duration.default};
  text-decoration: none;
  justify-content: center;
  display: flex;

	&:active {
		transform: translateY(2px);
		background: ${(p) =>
      p.secondary ? p.theme.colors.primaryLight : p.theme.colors.primaryDark};
	}
`;

export const TextButton = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  transition: ${(p) => p.theme.duration.default};
  border: none;
  background: transparent;
  color: ${(p) => p.theme.colors.black};
  text-decoration: none;

  &:active {
    transform: translateY(2px);
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const PageWrapper = styled.div`
  padding: ${(p) => `${p.theme.spacing.xxl} ${p.theme.spacing.xl}`} 0;
`;

export const RoundImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const Line = styled.div`
  height: 1px;
  background: ${(p) => p.theme.colors.grays[3]};
  width: 100%;
`;
