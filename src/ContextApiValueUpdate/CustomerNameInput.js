import React, { useContext } from 'react';
import CustomerContext from './CustomerContext';

const CustomerNameInput = () => {
  const { username, setUserName } = useContext(CustomerContext);
  return (
    <>
      <p>Enter new username below: </p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </>
  );
};

export default CustomerNameInput;
