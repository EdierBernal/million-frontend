export async function getOwners() {
  const response = await fetch('https://localhost:7186/api/Owners');
  if (!response.ok) {
    throw new Error('Failed to fetch owners');
  }
  return response.json();
}