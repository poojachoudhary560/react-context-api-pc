import React, { useContext } from 'react';
import CustomerContext from './CustomerContext';

const CustomerNameInput = () => {
  const { username, setUserName } = useContext(CustomerContext);
  return (
    <>
      <p>Customer Name Input Component: Current username: {username} </p>
      <p>Enter new username below: </p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </>
  );
};

export default CustomerNameInput;
