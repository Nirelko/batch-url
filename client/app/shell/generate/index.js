import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Flex } from 'reflexbox';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  inputContainer: {
    background: theme.palette.grey[700],
    padding: '8px'
  }
});

export default withStyles(styles)(({ classes }) => (
  <Flex column align='center' justify='center' auto>
    <Paper className={classes.inputContainer}>
      <TextField placeholder='Your url' InputProps={{ disableUnderline: true }}/>
    </Paper>
  </Flex>
));