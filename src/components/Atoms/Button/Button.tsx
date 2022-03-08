import { StyledButton } from './style';

export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};
