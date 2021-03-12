import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Creators as StudentActions } from 'store/ducks/student';
import { makeStyles } from '@material-ui/core';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  class_id: yup.string().required('Campo obrigatório'),
});

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
});

function Create({ id, classId, handleCreateSuccess }) {
  const classes = useStyles();
  const { loading, student, createSuccess, updateSuccess } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (id) {
      dispatch(StudentActions.updateStudentRequest({ ...values, id }));
    } else {
      dispatch(StudentActions.createStudentRequest(values));
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(StudentActions.loadStudentRequest(id));
    }
  }, [id]);

  useEffect(() => {
    if (createSuccess) {
      dispatch(StudentActions.createStudentReset());
    }
    if (updateSuccess) {
      dispatch(StudentActions.updateStudentReset());
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
        name: student?.name,
        class_id: student?.class_id || classId,
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
