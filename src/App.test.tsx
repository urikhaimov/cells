import React from 'react';
import ReactDom from 'react-dom'
import App from './App';


it('renders without crashing', () => {
  let div = document.createElement('div')
  ReactDom.render(<App />, div)
  ReactDom.unmountComponentAtNode(div);

});
