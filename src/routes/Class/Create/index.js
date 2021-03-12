import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Creators as ClassActions } from 'store/ducks/classes';
import { makeStyles } from '@material-ui/core';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  school_id: yup.string().required('Campo obrigatório'),
});

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
});

function Create({ id, schoolId, handleCreateSuccess }) {
  const classes = useStyles();
  const { loading, classObj, createSuccess, updateSuccess } = useSelector(
    (state) => state.classes
  );
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (id) {
      dispatch(ClassActions.updateClassRequest({ ...values, id }));
    } else {
      dispatch(ClassActions.createClassRequest(values));
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(ClassActions.loadClassRequest(id));
    }
  }, [id]);

  useEffect(() => {
    if (createSuccess) {
      dispatch(ClassActions.createClassReset());
    }
    if (updateSuccess) {
      dispatch(ClassActions.updateClassReset());
    }
    if (createSuccess || updateSuccess) {
      handleCreateSuccess();
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      enableReinitialize
      initialValues={{
        name: classObj?.name,
        school_id: classObj?.school_id || schoolId,
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={!!errors?.name}
            helperText={errors?.name}
            value={values?.name}
            onChange={handleChange}
            name="name"
            id="name"
            label="Nome"
            variant="filled"
          />
          <Button
            loading={loading}
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
          >
            {id ? 'SALVAR' : 'CRIAR'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Create;
