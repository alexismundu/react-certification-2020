import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const GlobalWrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.bg_color};
  color: ${(props) => props.theme.text_color};
`;
