import React from 'react';

const Design = ({nextStep, prevStep, handleChange, values}) => {
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
      <h1>hello design!</h1>
      <button onClick={ Previous }>Previous</button>
      <button onClick={ Continue }>Next</button>
    </div>
  )
}

export default Design