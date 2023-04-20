export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.append(mathFunction());
  } catch (error) {
    queue.append(`Error: ${error.message}`);
  } finally {
    queue.append('Guardrail was processed');
  }
  return queue;
}
