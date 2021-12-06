import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import UserContext from './UserContext';
import ContextOutsideProvider from './ContextOutsideProvider';

export const Application = (props) => {
  const [username, setUsername] = useState('John Smith');
  useEffect(() => {
    setTimeout(() => {
      setUsername('Smith, John Smith');
    }, 2000);
  }, []);

  return (
    <>
      <p>Accessing context data inside Provider</p>
      <UserContext.Provider value={username}>
        <Layout>Content Here</Layout>
      </UserContext.Provider>
      <div>
        <p>Accessing context data outside Provider</p>
        <div>
          <ContextOutsideProvider />
        </div>
      </div>
    </>
  );
};
