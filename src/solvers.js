/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solutions = [];

  var board = new Board({'n': n});

  var getSolutions = function( rooksLeft, board ) {
    if (solutions.length === 1) {
      return;
    } 
    if ( rooksLeft === 0 ) {
      solutions.push(board);
      return;
    }

    for ( var i = n - 1; i >= 0; i-- ) {
      
      var row = board.get(i);

      if ( row.reduce(function(a, b) { return a + b; }) >= 1 ) {
        return;
      }

      for ( var j = 0; j < row.length; j++ ) {
        
        board.togglePiece(i, j);
        
        if ( board.hasAnyRooksConflicts() ) {
          board.togglePiece(i, j);
        } else {
          var tempBoard = jQuery.extend(true, {}, board);
          getSolutions(rooksLeft - 1, tempBoard);
          board.togglePiece(i, j);
        }
      }

    }
        
  };                                          

  getSolutions(n, board);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0].rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solutions = [];

  var board = new Board({'n': n});

  var getSolutions = function( rooksLeft, board ) {  

    if ( rooksLeft === 0 ) {
      solutions.push(board.rows());
      return;
    }

    for ( var i = n - 1; i >= 0; i-- ) {

      var row = board.get(i);

      if ( row.reduce(function(a, b) { return a + b; }) >= 1 ) {
        return;
      }

      for ( var j = 0; j < row.length; j++ ) {
        board.togglePiece(i, j);
        
        if ( board.hasAnyRooksConflicts() ) {
          board.togglePiece(i, j);
        } else {
          // var tempBoard = jQuery.extend(true, {}, board);
          getSolutions(rooksLeft - 1, board);
          board.togglePiece(i, j);
        }
      }

    }
        
  };                                          

  getSolutions(n, board);


  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];
  var board = new Board({'n': n});
  var getSolutions = function( queensLeft, board ) {
    if (solutions.length === 1) {
      return;
    }
    if ( queensLeft === 0 ) {
      solutions.push(board);
      return;
    }
    for ( var i = n - 1; i >= 0; i-- ) {
      var row = board.get(i);
      if ( row.reduce(function(a, b) { return a + b; }) >= 1 ) {
        return;
      }
      for ( var j = 0; j < row.length; j++ ) {
        board.togglePiece(i, j);
        if ( board.hasAnyQueensConflicts() ) {
          board.togglePiece(i, j);
        } else {
          var tempBoard = jQuery.extend(true, {}, board);

          getSolutions(queensLeft - 1, tempBoard);
          board.togglePiece(i, j);
        }
      }

    }
  };                                          

  getSolutions(n, board);

  console.log(board.get('n'));

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  
  

  return solutions.length === 0 ? 0 : solutions[0].rows();

};

window.countNQueensSolutions = function(n) {
  var solutions = [];

  var board = new Board({'n': n});

  var getSolutions = function( queensLeft, board ) {  

    if ( queensLeft === 0 ) {
      solutions.push(board.rows());

      return;
    }
    for ( var i = n - 1; i >= 0; i-- ) {
      var row = board.get(i);

      if ( row.reduce(function(a, b) { return a + b; }) >= 1 ) {
        return;
      }
      
      for ( var j = 0; j < row.length; j++ ) {

        board.togglePiece(i, j);

        if ( board.hasAnyQueensConflicts() ) {
          board.togglePiece(i, j);
        } else {
          // var tempBoard = jQuery.extend(true, {}, board);

          getSolutions(queensLeft - 1, board);

          board.togglePiece(i, j);
        }
      }

    }
        
  };                                          

  getSolutions(n, board);


  console.log('Number of solutions for ' + n + ' queens:', solutions.length);
  return solutions.length;
};
