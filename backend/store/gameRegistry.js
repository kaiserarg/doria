const gameRegistry = {
    'Anagram Arena': { },
    'Test': { },
  };
  
  function getAvailableGames() {
    return Object.keys(gameRegistry);
  }
  
  module.exports = { getAvailableGames };
  