import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';
//testing a controlled component form.


afterEach(cleanup)
it('Inputing text updates the state', () => {
  render(<Form />);
  expect(screen.getByText(/Change/i).textContent).toBe("Change: ")

  fireEvent.change(screen.getByLabelText("Input Text:"), { target: { value: 'Text' } })

  expect(screen.getByText(/Change/i).textContent).not.toBe("Change: ")
})

it('submiting a form works correctly', () => {
  render(<Form />)
  expect(screen.getByText(/Submit Value/i).textContent).toBe("Submit Value: ")

  fireEvent.submit(screen.getByTestId("form"), { target: { text1: { value: 'Text' } } })

  expect(screen.getByText(/Submit Value/i).textContent).not.toBe("Submit Value: ")
})

it('should cycle elements in document tab', () => {
  const number = screen.getAllByTestId('meter')

  expect(document.body).toHaveFocus()
  userEvent.tab()

  expect(number).toHaveFocus()

  userEvent.tab()
})

const setup = () => {
  const utils = render(<Form />)
  const input = screen.getByLabelText('cost-input')
  const inputMeter = screen.getByLabelText('meter')
  return {
    input,
    inputMeter,
    ...utils
  }
}

it('should keep a $ in front of the input', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '5' } })
  expect(input.value).toBe('$5')
})

it('should allow a $ to be in the input when the value is changed', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '$5.0' } })
  expect(input.value).toBe('$5.0')
})

it('should not allow letters to be inputted', () => {
  const { input } = setup()
  expect(input.value).toBe('') // Empty Before
  fireEvent.change(input, { target: { value: 'What a nice weather!' } })
  expect(input.value).toBe('') // Empty After
})

it('should allow the $ to be deleted', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '5' } })
  expect(input.value).toBe('$5') // need to make a change so registers "" as a change
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('')
})

it('should not allow letters to be inputted in meter input', () => {
  const { inputMeter } = setup()
  expect(inputMeter.value).toBe('') // Empty Before
  fireEvent.change(inputMeter, { target: { value: 'Hey, You cant input string' } })
  expect(inputMeter.value).toBe('') // Empty After
})

it('Numbers not greater than 6 should not be inputted in meter input', () => {
  const { inputMeter } = setup()
  expect(inputMeter.value).toBe('') // Empty Before
  fireEvent.change(inputMeter, { target: { value: 3456749 } })
  expect(inputMeter.value).toBe(345674) // Empty After
})