import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';


const ToolBarStyle = theme => ({
  toolBar: {
    position: 'unset',
    background: theme.palette.grey[900],
    color: 'rgba(255,255,255,.87)',
    height: '54px'
  },
  title: {
    marginLeft: '20px'
  }
});

export default withStyles(ToolBarStyle)(({ classes }) => (
  <Paper className={classes.toolBar}>
    <h3 className={classes.title}>Batch Url</h3>
  </Paper>
));