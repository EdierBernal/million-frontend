export async function getProperties() {
  const response = await fetch('https://localhost:7186/api/Properties');
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  return response.json();
}