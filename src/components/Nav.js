import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Brand from './styled/Brand';
import NavBar from './styled/NavBar';
import Signout from './styled/Signout';
import Username from './styled/Username';
import withAppContext from '../context/withAppContext';

const Nav = ({ props }) => {
  const [user, setUser] = useState(null);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.history.push('/');
  }

  useEffect(() => {
    const { currentUser } = props.context;
    currentUser && setUser(currentUser);
  }, [props.context]);

  return (
    <NavBar>
      <Link to="/categories"><Brand>Grinfy</Brand></Link>
      <Username>
        {user && <p>{user.name}</p>}
        <Signout onClick={logout}>Signout</Signout>
      </Username>
    </NavBar>
  )
}

export default withAppContext(Nav);
