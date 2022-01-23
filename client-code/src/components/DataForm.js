import React, { Component } from 'react';
// import { Form, Button } from 'react-bootstrap';
import Author from './form_pages/Author';
import Tag from './form_pages/Tag';
import Design from './form_pages/Design';
import Research from './form_pages/Research';
import Findings from './form_pages/Findings';
import Confirmation from './form_pages/Confirmation';
import Success from './form_pages/Success';

export default class DataForm extends Component {
  state = {
    step: 1,
    submitter: '',
    email: '',
    title: '',
    authors: '',
    year: '',
    country: '',
    tag: '',
    design: '',
    research: '',
    findings: ''
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { submitter, email, title, authors, year, country, tag, design, research, findings } = this.state;
    const values = { submitter, email, title, authors, year, country, tag, design, research, findings }

    switch (step) {
      case 1:
        return (
          <Author
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2: {
        return (
          <Tag
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      }
      case 3: {
        return (
          <Design
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      }
      case 4: {
        return (
          <Research
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      }
      case 5: {
        return (
          <Findings
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      }
      case 6: {
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      }
      case 7: {
        return (
          <Success />
        )
      }
      default:
      // do nothing
    }
  }
}

