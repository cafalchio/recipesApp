import { Button, Form } from 'semantic-ui-react'

const RegisterForm = () => {
  return (
      <Form style={{padding: "10% 65% 0 15%"}} >
        <Form.Field>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Register</Button>
      </Form>
    )
  }

export default RegisterForm
