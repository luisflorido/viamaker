import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Creators as SchoolActions } from 'store/ducks/school';
import { makeStyles } from '@material-ui/core';
import { validateCnpj } from 'utils';
import InputMask from 'react-input-mask';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  cnpj: yup
    .string()
    .required('Campo obrigatório')
    .min(14, 'CNPJ Incompleto')
    .test(
      'valida-cnpj',
      'CNPJ Inválido',
      (cnpj) => cnpj && cnpj.length === 14 && validateCnpj(cnpj)
    ),
});

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
});

function Create({ id, handleCreateSuccess }) {
  const classes = useStyles();
  const { loading, school, createSuccess, updateSuccess } = useSelector(
    (state) => state.school
  );
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (id) {
      dispatch(SchoolActions.updateSchoolRequest({ ...values, id }));
    } else {
      dispatch(SchoolActions.createSchoolRequest(values));
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(SchoolActions.loadSchoolRequest(id));
    }
  }, [id]);

  useEffect(() => {
    if (createSuccess) {
      dispatch(SchoolActions.createSchoolReset());
    }
    if (updateSuccess) {
      dispatch(SchoolActions.updateSchoolReset());
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
      initialValues={{ name: school?.name, cnpj: school?.cnpj }}
    >
      {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
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
          <InputMask
            error={!!errors?.cnpj}
            helperText={errors?.cnpj}
            mask="99.999.999/9999-99"
            name="cnpj"
            id="cnpj"
            label="CNPJ"
            value={values?.cnpj}
            onChange={({ target: { value } }) => {
              if (value?.length) {
                setFieldValue('cnpj', value?.replace(/[._/-]/g, ''));
              }
            }}
          >
            {(inputProps) => <TextField {...inputProps} variant="filled" />}
          </InputMask>
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
