import {
  Box,
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import dayjs from 'dayjs';
import { Creators as StudentActions } from 'store/ducks/student';
import Loading from 'components/Loading';
import ModalDelete from './ModalDelete';

const columns = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'name',
    label: 'Nome',
  },
  {
    id: 'created_at',
    label: 'Criado em',
  },
  {
    id: '#',
    label: '',
  },
];

const useStyles = makeStyles((theme) => ({
  editIcon: {
    backgroundColor: 'orange',
    color: 'white',
  },
  deleteIcon: {
    backgroundColor: 'red',
    color: 'white',
  },
  infoIcon: {
    backgroundColor: 'lightblue',
    color: 'white',
  },
  noRegister: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

function List({ handleEdit, classId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, data, deleteSuccess } = useSelector(
    (state) => state.student
  );
  const [deleteSchool, setDeleteSchool] = useState(null);

  useEffect(() => {
    dispatch(StudentActions.loadStudentsRequest({ class_id: classId }));
  }, []);

  const handleClose = () => {
    setDeleteSchool(null);
  };

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(StudentActions.loadStudentsRequest({ class_id: classId }));
    }
  }, [deleteSuccess]);

  const handleDelete = () => {
    dispatch(StudentActions.deleteStudentRequest(deleteSchool?.id));
    setDeleteSchool(null);
  };

  const renderRows = useCallback(() => {
    return data?.map((row) => {
      const { id, name, created_at } = row;
      return (
        <TableRow hover>
          <TableCell>{id}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{dayjs(created_at).format('DD/MM/YYYY HH:mm')}</TableCell>
          <TableCell>
            <Box style={{ display: 'flex' }}>
              <Box mr={1}>
                <Button
                  className={classes.editIcon}
                  variant="contained"
                  style={{ height: 30, width: 30 }}
                  onClick={() => handleEdit(id)}
                >
                  <EditIcon />
                </Button>
              </Box>
              <Button
                className={classes.deleteIcon}
                variant="contained"
                style={{ height: 30, width: 30 }}
                onClick={() => setDeleteSchool(row)}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      );
    });
  }, [data]);

  return (
    <Loading loading={loading}>
      {data?.length ? (
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    <TableSortLabel onClick={() => {}}>
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{renderRows()}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className={classes.noRegister}>
          <span>Nenhum registro encontrado.</span>
        </div>
      )}
      <ModalDelete
        deleteSchool={deleteSchool}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Loading>
  );
}

export default List;
