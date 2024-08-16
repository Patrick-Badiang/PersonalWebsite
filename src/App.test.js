import { render, screen } from '@testing-library/react';
import App from './App.js';

import { act } from 'react';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  

});
