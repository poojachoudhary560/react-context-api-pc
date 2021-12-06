import React, { useContext } from 'react';
import UserContext from './UserContext';

const ContextOutsideProvider = () => {
  const username = useContext(UserContext);
  return (
    <>
      <div>
        Username:
        {username}
      </div>
    </>
  );
};

export default ContextOutsideProvider;
