import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

const classes = 'bg-slate-25 text-black p-2.5 placeholder-[#A5A8B9] text-sm font-light tracking-widest px-4 border-1 border-[#F0F1F7] rounded-lg w-full'
const labelClasses = 'block mb-2 text-sm font-medium dark:text-white'
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      meter: '',
      formErrors: { amount: '', meter: '' },
      amountValid: false,
      meterValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (isNaN(value)) return
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let amountValid = this.state.amountValid;
    let meterValid = this.state.meterValid;

    switch (fieldName) {
      case 'amount':
        amountValid = value > 100
        fieldValidationErrors.amount = amountValid ? '' : ' is invalid, only multiples of 100 not greater than 182,500 is accepted*';
        break;
      case 'meter':
        meterValid = value.length === 6;
        fieldValidationErrors.meter = meterValid ? '' : ' is invalid, only 6 digits accepted*';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      amountValid: amountValid,
      meterValid: meterValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.amountValid && this.state.meterValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <div className='lg:mx-4 mt-32 lg:mt-16 grid lg:grid-cols-2 grid-cols-1'>
        <div className='p-4 lg:ml-96 max-w-sm bg-white rounded-lg border border-gray-500 shadow sm:p-6 lg:p-8 dark:bg-gray-800'>
          <form data-testid="form" className='space-y-6'>
            <h2 className='text-xl font-bold dark:text-white'>Log in</h2>
            <div className="border border-gray-300 rounded text-red-500">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.amount)}`}>
              <label htmlFor="amount" className={labelClasses}>amount</label>
              <input type="text" aria-label='cost-input' required className={classes} name="amount"
                placeholder="amount"
                value={this.state.amount}
                onChange={this.handleUserInput} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.meter)}`}>
              <label htmlFor="meter" className={labelClasses}>meter</label>
              <input type="text" aria-label='meter' className={classes} name="meter"
                placeholder="meter"
                value={this.state.meter}
                onChange={this.handleUserInput} />
            </div>

            <button type="submit" className="w-full -mt-4 text-white bg-cyan-400 rounded-lg text-sm px-5 py-2.5 text-center" disabled={!this.state.formValid}>Sign up</button>
          </form>
          <div className='mt-16 flex-col flex'>
            <p className='dark:text-white'>Amount Value: {this.state.amount}</p>
            <p className='dark:text-white'>Meter Number: {this.state.meter}</p>
          </div>
        </div>
        <div className='bg-cyan-400 lg:flex hidden rounded-lg max-w-sm'>
          <div className='py-52 px-24'>
            <p className='text-md text-white'>Nice to see you again</p>
            <h1 className='font-bold pt-2 text-white text-xl'>Welcome! Sell It.</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default NewForm;