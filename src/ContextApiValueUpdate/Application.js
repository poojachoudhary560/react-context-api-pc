import React, { useState, useMemo } from 'react';
import CustomerContext from './CustomerContext';
import CustomerNameInput from './CustomerNameInput';
import Layout from './Layout';

const Application = (props) => {
  const [username, setUserName] = useState('John smith');
  const value = useMemo(() => ({ username, setUserName }), [username]);
  return (
    <CustomerContext.Provider value={value}>
      <div>
        <p>Context called 1 </p>
        <Layout>Layout Component Called</Layout>
      </div>
      <div>
        <CustomerNameInput />
      </div>
    </CustomerContext.Provider>
  );
};

export default Application;
