import 'jest';
import {getGrid} from './utils/helper';

describe('utils', () => {
    let emptyGrid:number[][] = [];
    let grid:number[][] = getGrid(emptyGrid, 4, true);
    let nextGrid:number[][] =getGrid(grid, 4, false);
    let mockGrid:number[][] = [ [1, 0, 0, 1 ], [0, 1, 0, 1], [0, 0, 0, 1], [1, 0, 1, 1 ] ];
    let nextMockGrid:number[][] = [ [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 1 ], [ 0, 0, 1, 1 ] ];
   
    it('should be array arter first init', () => {
        expect(grid).toEqual(expect.arrayContaining(emptyGrid));
    });
    it('should be changed after first tick', () => {
      expect(nextGrid).not.toEqual(expect.arrayContaining(grid));
    });
    it('should be changed by the rules', () => {     
      expect(getGrid(mockGrid, 4, false)).toEqual(nextMockGrid);
    });

  })