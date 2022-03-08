import styled from 'styled-components';

export const StyledButton = styled.button<{ someValue: string }>`
  display: ${({ someValue }) => someValue};
`;
