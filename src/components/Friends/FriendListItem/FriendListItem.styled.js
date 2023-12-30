import styled from 'styled-components';

export const FriendsList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  padding: 16px;
  margin: 0px 5px;

  width: 360px;

  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  background-color: ${({ theme }) => theme.colors.grine};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.box};
    transform: scale(1.1);
  }
`;

export const Status = styled.span`
  display: block;
  margin-left: 30px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70px;
  width: 70px;

  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.1);
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: Roboto;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;
