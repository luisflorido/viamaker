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
import { Creators as SchoolActions } from 'store/ducks/school';
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
    id: 'cnpj',
    label: 'CNPJ',
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

const useStyles = makeStyles({
  editIcon: {
    backgroundColor: 'orange',
    color: 'white',
  },
  deleteIcon: {
    backgroundColor: 'red',
    color: 'white',
  },
});

function List({ handleEdit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, data, deleteSuccess } = useSelector((state) => state.school);
  const [deleteSchool, setDeleteSchool] = useState(null);

  useEffect(() => {
    dispatch(SchoolActions.loadSchoolsRequest());
  }, []);

  const handleClose = () => {
    setDeleteSchool(null);
  };

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(SchoolActions.loadSchoolsRequest());
    }
  }, [deleteSuccess]);

  const handleDelete = () => {
    dispatch(SchoolActions.deleteSchoolRequest(deleteSchool?.id));
    setDeleteSchool(null);
  };

  const parseCnpj = useCallback((cnpj) => {
    let c = '';
    const mask = '99.999.999/9999-99';
    let i = 0;
    mask.replace(/[0-9./-]/g, (dado) => {
      // eslint-disable-next-line no-plusplus
      c += +dado === 9 ? cnpj[i++] : dado;
    });
    return c;
  }, []);

  const renderRows = useCallback(() => {
    return data?.map((row) => {
      const { id, name, cnpj, created_at } = row;
      return (
        <TableRow hover>
          <TableCell>{id}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{parseCnpj(cnpj)}</TableCell>
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
      <ModalDelete
        deleteSchool={deleteSchool}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Loading>
  );
}

export default List;
