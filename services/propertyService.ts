export async function getProperties() {
  const response = await fetch('https://localhost:7186/api/Properties');
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  return response.json();
}

export async function getPropertyImages() {
  const response = await fetch('https://localhost:7186/api/PropertyImages');
  if (!response.ok) {
    throw new Error('Failed to fetch property images');
  }
  return response.json();
}

export async function getPropertyTraces() {
  const response = await fetch('https://localhost:7186/api/PropertyTraces');
  if (!response.ok) {
    throw new Error('Failed to fetch property traces');
  }
  return response.json();
}

