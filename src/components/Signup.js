import React, { useEffect, useState } from 'react'
import  { NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import Cover from './styled/Cover';
import Button from './styled/Button';
import Slogan from './styled/Slogan';
import InputField from './InputField';
import AuthForm from './styled/AuthForm';
import StyledAuth from './styled/StyledAuth';
import SmallParagraph from './styled/SmallParagraph';
import SIGNUP_MUTATION from '../mutations/SignupMutation';

export default ({history}) => {
  const [values, setValues] = useState({});
  const { name, email, password, confirmPassword } = values;
  const [signup, { data }] = useMutation(SIGNUP_MUTATION);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    const newState = { ...values, [name]: value }
    setValues(newState);
  }

  useEffect(() => {
    const { error } = (data && data.signup) || {};
    if (error) {
      setError(error);
    }
  }, [data]);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signup({ variables: { name, email, password, confirmPassword } });

    !res.data.signup.error && history.push('/');
  }

  return (
    <StyledAuth>
      <Cover>
        <Slogan>
          <p>When your are lonely,</p>
          <p>we deliver happiness to you.</p>
        </Slogan>
      </Cover>

      <AuthForm onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <SmallParagraph>or <NavLink to='/'>signin to your account</NavLink></SmallParagraph>
        <InputField
          marginTop='20px'
          placeholder="Name"
          name="name"
          type="text"
          onChange={e => handleChange(e)}
          value={name}
          error={error}
        />
        <InputField
          placeholder="Email"
          name="email"
          type="email"
          onChange={e => handleChange(e)}
          value={email}
          error={error}
        />
        <InputField
          placeholder="Password"
          name="password"
          type="password"
          autocomplete="new-password"
          onChange={e => handleChange(e)}
          value={password}
          error={error}
        />
        <InputField
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          autocomplete="new-password"
          onChange={e => handleChange(e)}
          value={confirmPassword}
          error={error}
        />

        <Button type="submit">
          Signup
        </Button>
      </AuthForm>
    </StyledAuth>
  )
}
