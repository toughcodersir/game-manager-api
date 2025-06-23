const apiUrl = 'http://localhost:5000/api/items';

const gameList = document.getElementById('gameList');
const form = document.getElementById('gameForm');

async function fetchGames() {
  const res = await fetch(apiUrl);
  const games = await res.json();
  gameList.innerHTML = '';
  games.forEach(game => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><b>${game.name}</b> | ${game.genre} | ₹${game.price}</span>
      <div>
        <button class="update-btn" onclick="updateGame('${game._id}')">Update</button>
        <button class="delete-btn" onclick="deleteGame('${game._id}')">Delete</button>
      </div>
    `;
    gameList.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const genre = document.getElementById('genre').value;
  const price = document.getElementById('price').value;

  await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, genre, price })
  });

  form.reset();
  fetchGames();
});

async function updateGame(id) {
  const name = prompt("Enter new name:");
  const genre = prompt("Enter new genre:");
  const price = prompt("Enter new price:");
  if (name && genre && price) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, genre, price })
    });
    fetchGames();
  }
}

async function deleteGame(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchGames();
}

fetchGames();
