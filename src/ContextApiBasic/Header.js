import React from 'react';
import UserInfo from './UserInfo';

const Header = ({ username }) => {
  return (
    <header>
      <UserInfo username={username} />
    </header>
  );
};

export default Header;
