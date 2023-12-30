import styled from 'styled-components';

export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto 32px;
  width: 360px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grine};
  padding: 20px;
`;

export const Title = styled.h2`
  border-bottom: 1px solid #d3d5e3;
  color: ${({ theme }) => theme.colors.blue};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.text};
  text-transform: uppercase;
  text-align: center;
  padding: 16px;
  margin: 0;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  gap: 10px;

  padding: 0;
  margin: 0;
`;
