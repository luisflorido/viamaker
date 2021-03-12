import { makeStyles } from '@material-ui/core';
import Drawer from 'components/Drawer';
import React, { useCallback, useEffect, useState } from 'react';
import Header from 'components/Header';
import { useParams } from 'react-router-dom';
import List from './List';
import Create from './Create';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: 'bold',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const headerOptions = [
  { key: 'LIST', label: 'Acessar alunos' },
  { key: 'CREATE', label: 'Criar alunos' },
];

function Class({ history }) {
  const { id: schoolId, idClass: classId, idStudent } = useParams();
  const classes = useStyles();
  const [headerSelected, setHeaderSelected] = useState(
    headerOptions[idStudent ? 1 : 0].key
  );

  const handleCreateSuccess = () => {
    setHeaderSelected(headerOptions[0].key);
  };

  useEffect(() => {
    if (idStudent) {
      setHeaderSelected(headerOptions[1].key);
    }
  }, [idStudent]);

  const handleEdit = (id) => {
    history.push(`/school/${schoolId}/class/${classId}/student/${id}`);
  };

  const renderContent = useCallback(() => {
    if (headerSelected === 'LIST') {
      return <List classId={classId} handleEdit={handleEdit} />;
    }
    if (headerSelected === 'CREATE') {
      return (
        <Create
          id={idStudent}
          classId={classId}
          handleCreateSuccess={handleCreateSuccess}
        />
      );
    }
    return <></>;
  }, [headerSelected]);

  return (
    <div className={classes.root}>
      <Drawer title="ALUNOS" history={history}>
        <Header
          selected={headerSelected}
          setSelected={setHeaderSelected}
          options={headerOptions}
        />
        {renderContent()}
      </Drawer>
    </div>
  );
}

export default Class;
