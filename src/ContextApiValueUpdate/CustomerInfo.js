import React, { useContext } from 'react';
import CustomerContext from './CustomerContext';

const CustomerInfo = () => {
  const { username } = useContext(CustomerContext);
  return <>Customer Name: {username}</>;
};

export default CustomerInfo;
