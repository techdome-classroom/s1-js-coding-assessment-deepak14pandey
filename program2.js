// const decodeTheRing = function (s, p) {

//     // write your code here

//   };
  
//   module.exports = decodeTheRing;

function isMatch(message, pattern) {
  const m = message.length;
  const p = pattern.length;

  // Create a DP table initialized with false
  const dp = Array(m + 1).fill(false).map(() => Array(p + 1).fill(false));

  // Base case: empty pattern matches empty message
  dp[0][0] = true;

  // Handle patterns with '*' at the beginning
  for (let j = 1; j <= p; j++) {
      if (pattern[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= p; j++) {
          if (pattern[j - 1] === '*') {
              // '*' matches zero or more characters
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
              // '?' matches any single character or exact match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  // The result is in dp[m][p]
  return dp[m][p];
}

// Example usage:
console.log(isMatch("aa", "a"));  // Output: false
console.log(isMatch("aa", "*"));  // Output: true
console.log(isMatch("cb", "?a")); // Output: false
