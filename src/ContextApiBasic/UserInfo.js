import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () => {
  const username = useContext(UserContext);
  return <span>{username}</span>;
};

export default UserInfo;
