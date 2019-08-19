import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { useLazyQuery } from 'react-apollo';

import Cover from './styled/Cover';
import Slogan from './styled/Slogan';
import Button from './styled/Button';
import InputField from './InputField';
import AuthForm from './styled/AuthForm';
import StyledAuth from './styled/StyledAuth';
import SIGNIN_QUERY from '../queries/SigninQuery';
import SmallParagraph from './styled/SmallParagraph';
import withAppContext from '../context/withAppContext';

const Signin = ({ context, history }) => {
  const [values, setValues] = useState({});
  const { email, password } = values;
  const [signin, { called, loading, data }] = useLazyQuery(SIGNIN_QUERY, {
    variables: { email, password },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const { error, payload } = (data && data.signin) || {};
    if (error) {
      setError(error);
    } else {
      payload && localStorage.setItem("token", JSON.stringify(payload.token));
      payload && !error && history.push('/categories');
    }
  }, [data, history]);

  const handleChange = e => {
    const { name, value } = e.target;
    const newState = { ...values, [name]: value }
    setValues(newState);
  }


  const handleSubmit = e => {
    e.preventDefault();
    signin();
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
        <h2>Sign in</h2>
        <SmallParagraph>or <NavLink to='/signup'>create a new account</NavLink></SmallParagraph>
        <InputField
          marginTop='20px'
          placeholder="Email"
          name="email"
          type="email"
          error={error}
          onChange={e => handleChange(e)}
        />

        <InputField
          placeholder="Password"
          name="password"
          type="password"
          autocomplete="new-password"
          error={error}
          onChange={e => handleChange(e)}
        />

        <Button type="submit" disabled={called && loading}>
          {called && loading ? 'Loading...' : 'Signin'}
        </Button>
      </AuthForm>
    </StyledAuth>
  )
}

export default withAppContext(Signin);