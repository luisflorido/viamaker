/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  p: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    marginRight: 20,
    marginBottom: 0,
    cursor: 'pointer',
    padding: 10,
  },
  selected: {
    color: 'blue',
  },
  notSelected: {
    color: 'black',
  },
});

function Header({ options, selected, setSelected }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {options.map(({ label, key }) => (
        <p
          onClick={() => setSelected(key)}
          className={`${classes.p} ${
            selected === key ? classes.selected : classes.notSelected
          }`}
          key={label}
        >
          {label}
        </p>
      ))}
    </div>
  );
}

export default Header;
