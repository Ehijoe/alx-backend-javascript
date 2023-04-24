export default function updateUniqueItems(dict) {
  for (const [key, value] of dict) {
    if (value === 1) {
      try {
        dict.set(key, 100);
      } catch (e) {
        throw Error('Cannot process');
      }
    }
  }
}
