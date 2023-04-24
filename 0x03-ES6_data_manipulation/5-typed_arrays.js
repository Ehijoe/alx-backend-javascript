export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw Error('Position outside range');
  }

  const arr = Int8Array(length);
  arr[position] = value;

  return arr;
}
