import { createMuiTheme } from 'material-ui/styles';
import yellow from 'material-ui/colors/yellow';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: yellow,
    secondary: red,
    error: red
  }
});