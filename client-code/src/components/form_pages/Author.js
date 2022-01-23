import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';

const Author = ({ nextStep, handleChange, values }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  // submitter, email, title, authors, year, country
  return (
    <div className='flex-container'>
      <h1 className='page-title'>Author Details</h1>
      <label className='form-info' for='name'>
        Your Name
      </label>
      <TextField
        id='name'
        className='form-input'
        placeholder="Name"
        aria-label="Your Name"
        onChange={handleChange('submitter')}
        defaultValue={values.submitter}
      />
      <label className='form-info' for='email'>
        Your Email
      </label>
      <TextField
        id='email'
        className='form-input'
        placeholder="Email Address"
        aria-label="Email Address"
        onChange={handleChange('email')}
        defaultValue={values.email}
      />
      <label className='form-info' for='title'>
        Paper Title
      </label>
      <TextField
        id='title'
        className='form-input'
        placeholder="Title"
        aria-label="Paper Title"
        onChange={handleChange('title')}
        defaultValue={values.title}
      />
      <label className='form-info' for='authors'>
        List of Authors (Separate the names with commas)
      </label>
      <TextField
        id='authors'
        className='form-input'
        placeholder="Authors"
        aria-label="Authors"
        onChange={handleChange('authors')}
        defaultValue={values.authors}
      />
      <label className='form-info' for='year'>
        Year of Publication
      </label>
      <TextField
        id='year'
        className='form-input'
        placeholder="YYYY"
        aria-label="Year of Publication"
        onChange={handleChange('year')}
        defaultValue={values.year}
      />
      <label className='form-info' for='country'>
        Country of Study
      </label>
      <TextField
        id='country'
        className='form-input'
        placeholder="Country"
        aria-label="Country of Study"
        onChange={handleChange('Country')}
        defaultValue={values.country}
      />
      <Box mt={5}>
        <Button className='form-info buttons' variant='contained' onClick={Continue}>
          Next
        </Button>
      </Box>
    </div>
  )
}

export default Author;