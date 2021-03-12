import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& .MuiInputBase-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiInputLabel-formControl': {
      color: theme.palette.text.primary,
    },
  },
}));

function XTextField({ ...props }) {
  const classes = useStyles();

  return <TextField className={classes.root} {...props} />;
}

export default XTextField;
