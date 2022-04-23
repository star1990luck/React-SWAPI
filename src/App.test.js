import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('Renders subtitle in the document', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  getByText('List of Movies:')
  getByText('Character:')
});

