import React, { createContext } from 'react';

const CustomerContext = createContext({
  username: '',
  // loggedIn: false,
  setUserName: () => {},
});

export default CustomerContext;
