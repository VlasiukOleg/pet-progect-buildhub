import styled from 'styled-components';

import DialogTitle from '@mui/material/DialogTitle';

export const StyledDialogTitle = styled(DialogTitle)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;
