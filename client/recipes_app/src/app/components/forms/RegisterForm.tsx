import { Formik } from 'formik';
import { Button, Form } from 'semantic-ui-react'
import MyTextInput from './MyTextInput';
import { useStore } from '../../stores/store';
import * as Yup from 'yup';


const RegisterForm = () => {
    const { userStore } = useStore();
    const { createUser } = userStore;

    return (
        <Formik
            initialValues={{ 
              firstName: '', 
              lastName: '',
              email: '', 
              password: '' ,
              repeatPassword: ''
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().max(20, 'Must be 20 characters or less'),
              lastName: Yup.string().max(20, 'Must be 20 characters or less'),
              email: Yup.string().required().email(),
              password: Yup.string().required('No password provided.') 
              .min(8, 'Password is too short - should be 8 chars minimum.'),
              repeatPassword: Yup.string().required().oneOf([Yup.ref('password'), ""], 'Passwords must match')
            })}
            onSubmit={values => {
                createUser({
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password
                });
        }}
        >
        {({handleSubmit}) => (
          
              <Form onSubmit={handleSubmit} autoComplete='off'>
                  <MyTextInput name='firstName' placeholder='First Name' />
                  <MyTextInput name='lastName' placeholder='Last Name'  />
                  <MyTextInput name='email' placeholder='Email'  />
                  <MyTextInput name='password' placeholder='Password' type='password' />
                  <MyTextInput name='repeatPassword' placeholder='Repeat Password' type='password' />
                  <Button positive content='Register' type='submit' fluid />
              </Form>
        )}

        </Formik>
    )
}

export default RegisterForm
