import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as AuthActions } from 'store/ducks/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

function Login({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(AuthActions.loginRequest(values));
  };

  useEffect(() => {
    if (data) {
      console.log('LOGADO');
      history.push('/school');
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant="h4"
          component="h1"
          color="textPrimary"
        >
          VIAMAKER TESTE LOGIN
        </Typography>
        <Formik
          validationSchema={schema}
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleChange, errors, values }) => (
            <Form>
              <TextField
                error={!!errors?.email}
                helperText={errors?.email}
                value={values?.email}
                onChange={handleChange}
                name="email"
                fullWidth
                id="email"
                label="Email"
                variant="filled"
              />
              <TextField
                error={!!errors?.password}
                helperText={errors?.password}
                value={values?.password}
                onChange={handleChange}
                name="password"
                fullWidth
                id="password"
                label="Senha"
                type="password"
                variant="filled"
              />
              <Button
                loading={loading}
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="secondary"
              >
                ENTRAR
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
