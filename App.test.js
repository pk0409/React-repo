import {render, cleanup, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

it('should take a snapshot', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment(<App />)).toMatchSnapshot()
 });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

