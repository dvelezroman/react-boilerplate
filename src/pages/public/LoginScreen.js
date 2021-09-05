import React, { useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import "../../styles/LoginPage.scss"

import { setSessionStorage } from '../../utils/storage'
import { AppContext } from '../..'
import Button from '../../components/common/Button'
import { useHistory } from 'react-router'

const LoginForm = (props) => {
  const { touched, errors } = props;

  return (
    <>
      <div className="login-wrapper" className="login-container">
        <h2>Login Page</h2>
        <Form className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="text" autoComplete="on" name="email" className={"form-control"} placeholder="Email" />
            {touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className={"form-control"} placeholder="Password" />
            {touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span>}
          </div>
          <Button title="Login" />
        </Form>
      </div>
    </>
  )
}

const LoginFormikWrapped = (props) => {
  const { handleSubmit } = props

  const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
      return {
        email: props.email || '',
        password: props.password || ''
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email not valid').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    handleSubmit
  })(LoginForm)

  return <LoginFormik handleSubmit={handleSubmit} />
}

const LoginScreen = () => {
  const {
    configData,
    setLoading,
    setIsAuthenticated
  } = useContext(AppContext)

  const history = useHistory()

  const handleSubmit = (values) => {
    const API_TO_GET_TOKEN = configData.ALKEMY_URL_TOKEN_PATH
    setLoading(true)
    fetch(API_TO_GET_TOKEN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      // navigate to Main Page
      if (!!data?.token) {
        setSessionStorage('alkemyToken', data?.token)
        setIsAuthenticated(true)
        history.push("/")
      }
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error)
    }).finally(() => {
      setLoading(false)
    });
  }

  return <LoginFormikWrapped handleSubmit={handleSubmit} />
}

export default LoginScreen
