import { makeStyles, Modal } from '@material-ui/core';
import React from 'react';
import Button from 'components/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btns: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  btnAccept: {
    backgroundColor: 'lightgreen',
    marginRight: theme.spacing(1),
  },
  btnDelete: {
    backgroundColor: 'indianred',
  },
}));

function ModalDelete({ deleteSchool, handleClose, handleDelete }) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={!!deleteSchool}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Excluir</h2>
        <p id="simple-modal-description">
          Deseja excluir {deleteSchool?.name}?
        </p>
        <div className={classes.btns}>
          <Button
            className={classes.btnAccept}
            onClick={handleDelete}
            fullWidth
            variant="contained"
            color="secondary"
          >
            SIM
          </Button>
          <Button
            className={classes.btnDelete}
            onClick={handleClose}
            fullWidth
            variant="contained"
            color="secondary"
          >
            NÃO
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDelete;
