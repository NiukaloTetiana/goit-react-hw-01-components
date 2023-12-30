import styled from 'styled-components';
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 50px auto 32px;
  padding: 16px;
  max-width: 100%;
  width: 360px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grine};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

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
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 32px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Tag = styled.p`
  font-family: Roboto;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: Roboto;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;

export const Stats = styled.ul`
  display: flex;
  gap: 22px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px;
  margin: 0px 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.box};
    transform: scale(1.1);
  }
`;

export const Label = styled.span`
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-size: 16px;
`;

export const Quantity = styled.span`
  color: ${({ theme }) => theme.colors.light};
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-weight: 700;
`;
