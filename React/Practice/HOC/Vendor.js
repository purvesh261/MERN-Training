import React from 'react';
import HOC from './HOC';

function Vendor() {
  return (
    <h1>Vendor Component</h1>
  )
}

const NewVendor = new HOC(Vendor);

export default NewVendor;