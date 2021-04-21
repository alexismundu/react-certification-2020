import styled from 'styled-components';

import VideoDetailsSidebar from '../../components/VideoDetailsSidebar';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  width: 90%;
`;

export const LeftContent = styled.div`
  margin-left: 5%;
  width: 100%;
  grid-column: 1;
`;

export const StyledVideoDetailsSidebar = styled(VideoDetailsSidebar)`
  grid-column: 2;
`;
