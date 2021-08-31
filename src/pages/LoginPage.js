import React from 'react'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import "../styles/LoginPage.scss"

const LoginPage = (props) => {
  const { touched, errors } = props;

  return (
    <>
      <div className="login-wrapper" className="login-container">
        <h2>Login Page</h2>
        <Form className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" className={"form-control"} placeholder="Email" />
            {touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className={"form-control"} placeholder="Password" />
            {touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </Form>
      </div>
    </>
  )
}

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
  handleSubmit: (values) => {
    const REST_API_URL = "YOUR_REST_API_URL";
    // fetch(REST_API_URL, {
    //   method: 'post',
    //   body: JSON.stringify(values)
    // }).then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   } else {
    //     // HANDLE ERROR
    //     throw new Error('Something went wrong');
    //   }
    // }).then(data => {
    //   // HANDLE RESPONSE DATA
    //   console.log(data)
    // }).catch((error) => {
    //   // HANDLE ERROR
    //   console.log(error)
    // });
    console.log(values)
  }
})(LoginPage)

export default LoginFormik