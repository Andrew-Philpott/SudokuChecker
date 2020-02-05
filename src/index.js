import $ from 'jquery';
import { Board } from './js/board.js';
import { displayRandomGrid  } from './js/board.js';
import './css/styles.css';


$(document).ready(function() {
  $("#button").click(function(){
    //let board = new Board();
    //board.makeRandomDiagnolGrid();
     //let numbers = board.getGrid();
    //  for(let i = 0; i < numbers.length; i++) {
    //    console.log(numbers[i]);
    //  }

     let otherBoard = new Board();
     displayRandomGrid(otherBoard.grid);
     otherBoard.fillColumns();
  });
})