import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const GlobalWrapper = styled.div`
  background-color: ${(props) => props.theme.bg_color};
  color: ${(props) => props.theme.text_color};
`;
