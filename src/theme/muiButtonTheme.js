import { createTheme } from '@mui/material/styles';

import { teal } from '@mui/material/colors';

export const muiTheme = createTheme({
  palette: {
    teal: {
      main: teal[500],
      light: teal[700],
      dark: teal[900],
      contrastText: teal[50],
    },
  },
});
