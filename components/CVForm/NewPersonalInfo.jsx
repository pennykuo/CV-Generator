import React, { useState } from 'react';
export default function NewPersonalInfo({
  onFirstName,
  onLastName,
  onTitle,
  onAddress,
  onPhoneNumber,
  onEmail,
  onDescription,
}) {
  return (
    <div className="inputInfo">
      <input type="text" placeholder='FirstName' onChange={onFirstName} />
      <input type="text" placeholder='LastName' onChange={onLastName} />
      <input type="text" placeholder='Title' onChange={onTitle} />
      <input type="text" placeholder='Address' onChange={onAddress} />
      <input type="text" placeholder='Phone Number' onChange={onPhoneNumber} />
      <input type="text" placeholder='Email' onChange={onEmail} />
      <input type="text" placeholder='Description' onChange={onDescription} />
    </div>


  );
}