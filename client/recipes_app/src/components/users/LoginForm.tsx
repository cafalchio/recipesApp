import { Form, Formik } from "formik";
import MyTextInput from "./MyTextInput";
import { Button } from "semantic-ui-react";

export default function LoginForm() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
                console.log(values);
        }}
        >
        {({handleSubmit}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='email' placeholder='Email' label={""} />
                <MyTextInput name='password' placeholder='Password' type='password' label={""} />
                <Button positive content='Login' type='submit' fluid />
            </Form>
        )}

        </Formik>
    )
}