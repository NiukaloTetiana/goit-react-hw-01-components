import styled from 'styled-components';

export const ExtendedTr = styled.tr`
  background-color: ${({ theme }) => theme.colors.grine};
`;

export const Td = styled.td`
  padding: 6px 15px;
  font-size: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.1);
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
  font-family: Roboto;
  font-style: italic;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  padding: 6px 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.1);
  }
`;
