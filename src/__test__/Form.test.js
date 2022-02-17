import React from 'react';
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
