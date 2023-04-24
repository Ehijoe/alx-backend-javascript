export default function hasValuesFromArray(numSet, arr) {
  return arr.reduce((acc, num) => (acc && (numSet.has(num))), true);
}
