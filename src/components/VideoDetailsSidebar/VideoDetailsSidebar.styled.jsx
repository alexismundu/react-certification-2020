import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 90vh;
  overflow-y: scroll;
`;

export const StyledVideo = styled(Paper)`
  .MuiPaper-root {
    background-color: ${(props) => props.theme.text_color};
    color: ${(props) => props.theme.sub_color};
    border-radius: 0;
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;
    height: 100%;
  }
  text-align: left;
`;

export const TextBase = styled.p`
  margin: 0 10px 10px 10px;
  text-overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const VideoTitle = styled(TextBase)`
  max-height: 30%;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const ChannelTitle = styled(TextBase)`
  font-weight: 100;
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const ThumbnailBase = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
`;

export const Thumbnail = styled(ThumbnailBase)`
  @media only screen and (max-width: 600px) {
    height: 90px;
  }

  @media only screen and (min-width: 600px) {
    height: 110px;
  }

  @media only screen and (min-width: 900px) {
    height: 130px;
  }

  @media only screen and (min-width: 1400px) {
    height: 150px;
  }
`;
