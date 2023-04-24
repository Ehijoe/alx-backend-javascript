export default function cleanSet(dirtySet, startString) {
  return Array.from(dirtySet)
    .filter((word) => (word.startsWith(startString)))
    .map((word) => (word.substring(startString.length)))
    .join('-');
}
