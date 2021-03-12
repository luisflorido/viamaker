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
  { key: 'LIST', label: 'Acessar escolas' },
  { key: 'CREATE', label: 'Criar escola' },
];

function School({ history }) {
  const { id: schoolId } = useParams();
  const classes = useStyles();
  const [headerSelected, setHeaderSelected] = useState(
    headerOptions[schoolId ? 1 : 0].key
  );

  const handleCreateSuccess = () => {
    setHeaderSelected(headerOptions[0].key);
  };

  useEffect(() => {
    if (schoolId) {
      setHeaderSelected(headerOptions[1].key);
    }
  }, [schoolId]);

  const handleEdit = (id) => {
    history.push(`/school/${id}`);
  };

  const renderContent = useCallback(() => {
    if (headerSelected === 'LIST') {
      return <List handleEdit={handleEdit} />;
    }
    if (headerSelected === 'CREATE') {
      return <Create id={schoolId} handleCreateSuccess={handleCreateSuccess} />;
    }
    return <></>;
  }, [headerSelected]);

  return (
    <div className={classes.root}>
      <Drawer title="ESCOLAS">
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

export default School;
