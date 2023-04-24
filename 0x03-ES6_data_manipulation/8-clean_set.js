export default function cleanSet(dirtySet, startString) {
  return Array.from(dirtySet)
    .filter((word) => (word.startsWith(startString)))
    .join('-');
}
