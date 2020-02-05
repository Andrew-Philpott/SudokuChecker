import $ from 'jquery';

export class Board {
    constructor() {
      this.grid = [this.makeAllRandomDiagnolGrids(this.makeRandomDiagnolGrid()), this.makeBlankGrid(), this.makeBlankGrid(), this.makeBlankGrid(),
        this.makeAllRandomDiagnolGrids(this.makeRandomDiagnolGrid()), this.makeBlankGrid(), this.makeBlankGrid(), this.makeBlankGrid(),
        this.makeAllRandomDiagnolGrids(this.makeRandomDiagnolGrid())
      ];
    }

    fillColumns() {
      let columns = [[],[],[],[],[],[],[],[],[]];
      let gridNumber = 0;
      for(let col = 0; col < 3; col++) {
       // let gridStart = 0;  
        console.log(gridNumber + " grid number")


        let columnSpaceValues = columns[col];
        for(let i = 0; i < 3; i++){
          
          for(let j = 0; j < 3; j++) {
            
           let gridArrays = this.grid[gridNumber];
          // console.log(gridArrays.length + " grid array length");
            columnSpaceValues.push(gridArrays[i][j]);
            console.log((gridArrays[i][j]) + " value: " + i + " j value:"+  j + " " + gridArrays.length);
          }
          gridNumber = gridNumber + 1;
        }
        console.log(columnSpaceValues);
      }
    }

    makeRandomDiagnolGrid() {
      let possibleNumbers = [1,2,3,4,5,6,7,8,9];
      let randomNumberOrder = [];
      let initialPossibleNumbersLength = possibleNumbers.length;

      for(let i = 0; i < initialPossibleNumbersLength; i++) {
        let currentPossibleNumbersLength = possibleNumbers.length;
        let value = Math.floor((Math.random() * (currentPossibleNumbersLength-1)));
        randomNumberOrder.push(possibleNumbers[value]);
        possibleNumbers.splice(value, 1);
      }
      return randomNumberOrder;
    }

    makeAllRandomDiagnolGrids(randomNumberSequenceArray) {
      //for the sequence of the array
      let spacesArray = [[],[],[]];
      let randomNumberSequenceArrayIterator = 0;
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        
        spacesArray[row][col] = randomNumberSequenceArray[randomNumberSequenceArrayIterator];
        console.log(spacesArray[row][col]);
        randomNumberSequenceArrayIterator++;
      }
    }
    return spacesArray;
  }

  makeBlankGrid() {
    let spacesArray = [[],[],[]];
      //let randomNumberSequenceArrayIterator = 0;
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        
        spacesArray[row][col] = 0;
        console.log(spacesArray[row][col]);
       // randomNumberSequenceArrayIterator++;
      }
    }
    return spacesArray;
  }
  getGrid() {
    return this.grid;
  }
  
}
        //the grid object needs to start at 0
        //the grid object needs to increase by 3
        //the column number needs to change when
        //you iterate through the last grid
        //the column is a function of the grid start position
        //GridPositionOutOfLoop
        
      //   let gridColumn = 0;
        
      //   for(let row = 0; row < 3; row++) {
      //     let gridColumnGridArrays = this.grid[gridColumn];
          
      //     for(let i = 0; i < 3; i++) {
      //       defineColumn[row][i] =
      //     }
      //   }
      // }


    // for(let i = 0; i < 3; i++)      
    //   let currentGrid = 0;
      
    // }

    // fillColumns() {
    //   let columns = [[],[],[],[],[],[],[],[],[]];
    //   let i = 0;

    //   for(let col = 0; col < 9; col++) {
    //     let gridCountStart = 0;

    //     let gridArrays = this.grid[gridCountStart];
    //     for(let j = 0; j < 3; j++) {

    //       for(let m = 0; m < 3; m++) {

    //       }
    //       columns[col].push()
    //     }
    //   }
    // }


    //     let columnArray = columns[col];
    //     let gridNumber = 0
    //     while(gridNumber < 9) {
    //       for(let j = 0; j < 3; j++) {
    //         columnArray[col][j] = this.grid[]
    //       }
    //       columnArray[i]
    //     }
    //     for(let space = 0; space < 3)
    //   }


    //   for(let m = 0; m < 3; i++) {
    //     let grid = this.grid[m];
    //     let gridCol = this.grid[i];
    //     for(let j = 0; j < 3; j++) {
    //       let column = gridCol[i][j];
    //       columns[i][j] = column;
    //       console.log(columns[i][j] + " " + i + " " + j);
    //     }
    //     i = i + 3;
    //   }
    // }
    //   for(let gridCol = 0; gridCol < 3; gridCol++) {
    //      for(i; i < 9; i++) {
    //        let currentGrid = this.grid[i]
    //        for(int )
    //      }
    //   }
    //   for(let i = 0; i < 9; i++) {
    //     let currentGrid = this.grid[i];
    //     for(let j = 0; j < 3; j++) {
    //       let space = currentGrid[j][i]
    //       columns[i].push(space);
    //     }
    //   }
    // }

   

    // fillColumns() {
    //   let columns = [[],[],[],[],[],[],[],[],[]];
    //   let gridStart = 0;
    //   let columnPosition = 0;
    //   for(let i = 0; i < 3; i++) {
    //     let columnPositon

    //     for(let j = 0; j < 3; j++) {
    //       let columnSpace 

    //       for(let m = 0; m < 3; m++) {

    //       }
    //     }
    //   }
      //}}
  
export function displayRandomGrid(spacesArray) {
  let boardContainer = $("#board");
  console.log(spacesArray.length + " length of array");
    let htmlForBoardContainer = ``;
    
    for(let i = 0; i < 9; i++) {
      let currentGrid = spacesArray[i];
      htmlForBoardContainer = "<div class='grid'>";
      for(let j = 0; j < 3; j++) {
        for(let m = 0; m < 3; m++) {
          htmlForBoardContainer += `<div><p class='space'>${currentGrid[j][m]}</p></div>`;
        }
      }
      htmlForBoardContainer += `</div>`;
      
    }
    
   return boardContainer.append(htmlForBoardContainer);
}
export function displayBlankGrid() {
  let boardContainer = $("#board");
  let htmlForBoardContainer = "<div class='grid'>";

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      htmlForBoardContainer += `<div><p class='space'>${0}</p></div>`
    }
  }
  htmlForBoardContainer += `</div>`;
 return boardContainer.append(htmlForBoardContainer);
}
export function checkColumns() {

}
// spacesArray = [
//           0       1      2
//     0   [(0,0), (0,1), (0,2)],
//     1   [(1,0), (1,1) (1,2)],
//     2   [(2,0), (2,1), (2,2)]
// ]