import styled from 'styled-components';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialTextField from '@material-ui/core/TextField';
import MaterialSwitch from '@material-ui/core/Switch';

export const AppBar = styled(MaterialAppBar)`
  width: 100%;
`;

export const Toolbar = styled(MaterialToolbar)`
  background-color: ${(props) => props.theme.text_color};
  color: ${(props) => props.theme.sub_color};
`;

export const Switch = styled(MaterialSwitch)`
  .MuiSwitch-track {
    background-color: ${(props) => props.theme.sub_color};
  }

  .MuiSwitch-colorSecondary.Mui-checked {
    color: ${(props) => props.theme.bg_color};
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: ${(props) => props.theme.sub_color};
  }
`;

export const EndBar = styled.div`
  display: flex;
  flex-flow: flex-end;
  align-items: center;
  margin-left: auto;
`;

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TextField = styled(MaterialTextField)`
  & .MuiFormLabel-root {
    color: ${(props) => props.theme.sub_color};
  }

  & .MuiInputBase-input {
    border-bottom: 1px solid ${(props) => props.theme.sub_color};
    color: ${(props) => props.theme.bg_color};
  }

  & .MuiInput-underline::after {
    border-bottom: None;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before
    .MuiInput-underline:hover:not(.Mui-disabled):after {
    border-bottom: 1px solid ${(props) => props.theme.sub_color};
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.sub_color};
  }
`;
