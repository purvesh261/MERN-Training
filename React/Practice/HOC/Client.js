import React from 'react';
import HOC from './HOC';

function Client() {
  return (
    <div>Client Component</div>
  )
}

const NewClient = new HOC(Client);
export default NewClient;