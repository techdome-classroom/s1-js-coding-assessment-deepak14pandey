
function countIslands(grid) {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  
  function dfs(r, c) {
      
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
          return;
      }
      
     
      grid[r][c] = 'W';

      
      dfs(r + 1, c); 
      dfs(r - 1, c); // Up
      dfs(r, c + 1); // Right
      dfs(r, c - 1); // Left
  }

  
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              // We found an unvisited landmass, so it's a new island
              islandCount++;
              
              // Use DFS to mark the entire island as visited
              dfs(r, c);
          }
      }
  }

  return islandCount;
}

// Example usage:
const grid = [
  ["L","L","L","L","W"],
  ["L","L","W","L","W"],
  ["L","L","W","W","W"],
  ["W","W","W","W","W"],
];

console.log(countIslands(grid)); // Output: 1
