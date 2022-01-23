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
  // submitter, email, title, authors, year, country
  return (
    <div>
      <h1>hello confirmation!</h1>
      <p class='confirmation-p'>Your Name: {values.submitter}</p>
      <p class='confirmation-p'>Your Email: {values.email}</p>
      <p class='confirmation-p'>Paper Title: {values.title}</p>
      <p class='confirmation-p'>List of Authors: {values.authors}</p>
      <p class='confirmation-p'>Year of Publication: {values.year}</p>
      <p class='confirmation-p'>Country of Study: {values.country}</p>
      <button onClick={ Previous }>Previous</button>
      <button onClick={ Continue }>Submit Data</button>
    </div>
  )
}

export default Confirmation