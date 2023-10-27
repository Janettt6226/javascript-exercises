const removeFromArray = function(arr, ...args) {
  return arr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;

// 1. Sélectionner l'index de l'argument
// 2. Supprimer la valeur à cet index
// 3. Retourner l'arrêt sans cette valeur
