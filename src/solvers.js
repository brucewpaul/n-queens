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

  var solution = [];

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 0;

  var solutions = [];

  var board = new Board({'n': n});

  var getSolutions = function( rooksLeft, board ) {  
    debugger;
    if ( rooksLeft === 0 ) {
      solutions.push(board);
      debugger;
      return;
    }
    // row loop
    for ( var i = 0; i < n; i++ ) {
      // get row of board of i
      var row = board.get(i);
      // check if row has rook      
      debugger;
      if ( row.reduce(function(a, b) { return a + b; }) >= 1 ) {
        debugger;
        continue;
      }

      // iterate through each column of row
      // column loop
      for ( var j = 0; j < row.length; j++ ) {
        debugger;
        if ( j > 0 ) {
          row[j - 1] = 0;
        }
        // add rook to row/col
        row[j] = 1;
        // check if pass
        if ( board.hasAnyColConflicts() || board.hasAnyRowConflicts() ) {
          debugger;
          row[j] = 0;
        } else {
          debugger;
          // pass it to getSolutions
          var tempBoard = jQuery.extend(true, {}, board);

          getSolutions(rooksLeft - 1, tempBoard);
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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
