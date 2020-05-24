import React from 'react';
import ReactDom from 'react-dom'
import Grid from './grid';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it('renders without crashing', () => {
  let div  = document.createElement('div')
  ReactDom.render(<Grid/>, div)
  ReactDom.unmountComponentAtNode(div);
 
});
 it('renders correctly', () =>{
    const {getAllByTestId} = render(<Grid/>);
    expect(getAllByTestId('grid').length).toEqual(1);
     console.log('getAllByTestId', getAllByTestId('grid').child)
 });