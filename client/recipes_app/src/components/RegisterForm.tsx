import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { User } from '../app/models/user';

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
