/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param && !['desc', 'asc'].includes(param)) {
    throw new Error('неверный параметр сортировки');
  }

  let unsortedArray = arr.flat();
  if (param == 'desc') {
    return unsortedArray.sort((a, b) => b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'}));
  }
  return unsortedArray.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
}
