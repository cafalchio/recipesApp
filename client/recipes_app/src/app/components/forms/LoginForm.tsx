import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import MyTextInput from "./MyTextInput";

export default function LoginForm() {
    const { userStore } = useStore();
    const { login } = userStore;

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
                console.log(values);
                login(values);
        }}
        >
        {({handleSubmit}) => (
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='email' placeholder='Email'  />
                <MyTextInput name='password' placeholder='Password' type='password'/>
                <Button positive content='Login' type='submit' fluid />
            </Form>
        )}

        </Formik>
    )
}