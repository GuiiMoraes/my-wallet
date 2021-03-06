import styled from 'styled-components';

export const Container = styled.header`
  grid-area: MainHeader;

  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;

  padding: 0 8px;

  border-bottom: 1px solid ${props => props.theme.colors.gray};

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.white};
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;
