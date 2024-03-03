/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArr = path.split('.');
  
  return function(obj) {
    for (const value of pathArr) {
      if (!obj.hasOwnProperty(value)) {
        return;
      } 
      obj = obj[value];
    }
    return obj;
  };
}