import { getRandomHexColor } from 'components/utils/GetRandomHexColor';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  cursor: pointer;
  padding: 8px;

  width: 100%;
  height: 100%;

  border-color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  background-color: ${props => getRandomHexColor(props.index)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.small};
    transform: scale(1.1);
  }
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
`;
