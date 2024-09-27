const getTotalIsles = function (grid) {
 if(grid.length == 0) return 0;

 const rows = grid.length;
 const cols = grid[0].length;
 let islandCount = 0;

 function dfs(r, c) {
  if(r<0 || c<0 || r>= rows || c >= cols || grid[r][c]==='W'){
    return;
  }
 }

  // write your code here

};

module.exports = getTotalIsles;