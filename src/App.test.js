import { render } from '@testing-library/react';
import { act } from 'react';
import App from './App.js';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
});