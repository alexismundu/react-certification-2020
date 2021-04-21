import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import VideoDetailsSidebar from '../../components/VideoDetailsSidebar';

export const Container = styled.div`
  display: flex;
  width: 90%;
`;

export const LeftContent = styled.div`
  width: 80%;
`;

export const StyledVideoDetailsSidebar = styled(VideoDetailsSidebar)``;

export const StyledPaper = styled(Paper)`
  width: 20%;
`;
