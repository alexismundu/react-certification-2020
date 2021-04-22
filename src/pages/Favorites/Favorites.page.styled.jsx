import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text_color};
`;

export const StyledVideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

export const Section = styled.section`
  text-align: center;
  width: 100%;

  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;
