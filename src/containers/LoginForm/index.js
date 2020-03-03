import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
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
import Title from '../../components/Sidebar/Title';

const FlexBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

const Span = styled.span`
  font-size: 1rem;
  display: block;
  color: ${colors.greyLite};
`;

function LoginForm() {
  const { values, handlers, errors } = useForm(login, validate);

  const [busy, setBusy] = useState(false);
  const [credentials, setCredentials] = useState({});

  function login() {
    setBusy(true);
    setTimeout(() =>{
      console.log('Credentials sent ! yay !', values);
      setBusy(false);
      setCredentials(values);
      handlers.reset();
    }, 3000);
  }

  const reset = () => {
    setCredentials({});
    handlers.reset();
  }

  return (
    <Fragment>
      <div><Title><Span>Fun with</Span> Forms</Title></div>
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
          <SecondaryButton onClick={reset}>Reset</SecondaryButton>
          <Button type="submit" busy={busy}>Login</Button>
        </FlexBlock>
      </Form>
      <pre>{JSON.stringify(credentials)}</pre>
    </Fragment>
  );
}

export default LoginForm;
