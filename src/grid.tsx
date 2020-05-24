
import React, { useState } from 'react';
import './App.css';
import {getGrid} from './utils/helper';
import {useInterval} from './useInterval';

function Grid() {
  const size: number = 50;
  let emptyGrid:number[][] = [];
  const [grid, setGrid] = useState(getGrid(emptyGrid, size, true));

  useInterval(() => {
    setGrid(getGrid(grid, size, false));
  }, 400);

  return (
    
        <div data-testid ='grid' className="cells">
            {grid.map((cells, i: number) => (
                <div className="row" key={i}>
                 {cells.map((item, j: number) => {
                  return <div className={item? 'live cell': 'dead cell'} key={j}></div>})}
        </div>
  ))}
</div>)
}
export default Grid;
