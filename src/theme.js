import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans'].join(','),
    p: {
      fontWeight: '600',
    },
    th: {
      fontWeight: '600',
    },
  },
});

export default theme;
