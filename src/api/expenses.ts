export function getExpenses() {
  return fetch('https://mamo-mock-server.glitch.me/expenses',{
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'sk-a83af377-2fd5-4991-8202-e74801df8d98'
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching expenses:', error));
}