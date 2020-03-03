import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
// Hooks
import useForm from './hooks/useForm';
// Validation rules
import validate from './ValidationRules';
// Components
import H2 from '../../components/H2';
import Form from './components/Form';
import Field from './components/Field';
import Button from './components/Button';
import SecondaryButton from './components/SecondaryButton';

const FlexBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

function LoginForm() {
  const { values, handlers, errors } = useForm(login, validate);

  const [busy, setBusy] = useState(false);

  function login() {
    setBusy(true);
    setTimeout(() =>{
      console.log('Credentials sent ! yay !', values);
      setBusy(false);
      handlers.reset();
    }, 3000);
  }

  return (
    <Fragment>
      <H2>Login Form</H2>
      <Form onSubmit={handlers.handleSubmit}>
        <Field
          errors={errors}
          label="Email address"
          type="text"
          placeholder="Email address"
          name="email"
          onChange={handlers.handleChange}
          onBlur={handlers.handleBlur}
          onFocus={handlers.handleFocus}
          value={values.email}
          isRequired
        />
        <Field
          errors={errors}
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlers.handleChange}
          onBlur={handlers.handleBlur}
          onFocus={handlers.handleFocus}
          value={values.password}
          isRequired
        />
        <FlexBlock>
          <SecondaryButton onClick={handlers.reset}>Reset</SecondaryButton>
          <Button type="submit" busy={busy}>Login</Button>
        </FlexBlock>
      </Form>
    </Fragment>
  );
}

export default LoginForm;
