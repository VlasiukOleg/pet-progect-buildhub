import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 60px;
  padding-right: 60px;
`;

export const StyledTextField = styled(TextField)`
'& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',`;
