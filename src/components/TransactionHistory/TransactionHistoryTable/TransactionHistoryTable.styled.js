import styled from 'styled-components';

export const Table = styled.table`
  cursor: pointer;
  margin: 50px auto 32px;
  padding: 16px;

  width: 700px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.spacing(4)};
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grine};
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
    border-radius: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const Tbody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-weight: 600;
`;
