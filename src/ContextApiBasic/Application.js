import React from 'react';
import Layout from './Layout';

export const Application = (props) => {
  const username = 'John Smith';
  return <Layout username={username}>Content Here</Layout>;
};
