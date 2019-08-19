import React, { useState } from 'react';

import getCurrentUser from '../utils/auth';

export const { Provider, Consumer } = React.createContext();

export default ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const setLoggedinUser = () => {
    const token = JSON.parse(localStorage.getItem('token')) || '';
    const user = getCurrentUser(token);
    setCurrentUser(user);
  }

  const context = {
    currentUser,
    setLoggedinUser
  };

  return (
    <Provider value={{ ...context }}>
      {children}
    </Provider>
  )
}
