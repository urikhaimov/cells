function getRandom () {return  Number(Math.round(Math.random()))};

function findingNeighbors(grid:number[][], i: number, j: number) {

    return grid.reduce((a:number[],  b: number[], c: number) => {
       
        if(Math.max(0, i-1) <= c && c <= Math.min(i+1, grid.length-1)){
            a = a.concat(
                b.reduce((d: number[], e: number, f: number) => {
                if(f === j && c === i)
                    return d;
                if(Math.max(0, j-1) <= f && f <= Math.min(j+1, grid.length-1))
                    d.push(e)
                return d;
                },[])
            );
        }
        return a;
    },[]);
}

const getNewStatusForLive = (numberOfNeighbors: number) => 
  (numberOfNeighbors===2 || numberOfNeighbors===3)? 1 : 0;  

const getNewStatusForDied = (numberOfNeighbors: number) =>  (numberOfNeighbors === 3)? 1 : 0;  

export function getGrid(grid: number[][], size: number, init: boolean) {
    let result:number[][] = [];
    let neighbors:number;
    for (var i = 0 ; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {    
            if(init) {
                result[i][j] =  getRandom();
            }   else {
                neighbors = findingNeighbors(grid, i, j).reduce((a, b) => a + b, 0);  
                result[i][j] = grid[i][j]? getNewStatusForLive(neighbors) : getNewStatusForDied(neighbors);  
            }                
        }
    } 
     
   return result;
}


