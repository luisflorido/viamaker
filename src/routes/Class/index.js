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
  { key: 'LIST', label: 'Acessar turmas' },
  { key: 'CREATE', label: 'Criar turma' },
];

function Class({ history }) {
  const { id: schoolId, idClass: classId } = useParams();
  const classes = useStyles();
  const [headerSelected, setHeaderSelected] = useState(
    headerOptions[classId ? 1 : 0].key
  );

  const handleCreateSuccess = () => {
    setHeaderSelected(headerOptions[0].key);
  };

  useEffect(() => {
    if (classId) {
      setHeaderSelected(headerOptions[1].key);
    }
  }, [classId]);

  const handleEdit = (id) => {
    history.push(`/school/${schoolId}/class/${id}`);
  };

  const handleInfo = (id) => {
    history.push(`/school/${schoolId}/class/${id}/student`);
  };

  const renderContent = useCallback(() => {
    if (headerSelected === 'LIST') {
      return (
        <List
          schoolId={schoolId}
          handleEdit={handleEdit}
          handleInfo={handleInfo}
        />
      );
    }
    if (headerSelected === 'CREATE') {
      return (
        <Create
          id={classId}
          schoolId={schoolId}
          handleCreateSuccess={handleCreateSuccess}
        />
      );
    }
    return <></>;
  }, [headerSelected]);

  return (
    <div className={classes.root}>
      <Drawer title="TURMAS" history={history}>
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
