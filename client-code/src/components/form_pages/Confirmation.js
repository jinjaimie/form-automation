import React from 'react';

const Confirmation = ({nextStep, prevStep, handleChange, values}) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <h1>hello confirmation!</h1>
      <p>Author: {values.authors}</p>
      <button onClick={ Previous }>Previous</button>
      <button onClick={ Continue }>Submit Data</button>
    </div>
  )
}

export default Confirmation