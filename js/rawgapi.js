const API_KEY = "b6b5adf845ad4c77ab376fecda8e7d31";

async function getGames() {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    const data = await response.json();
    showGames(data.results);
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

function showGames(games) {
  const container = document.getElementById("games-container");
  const doubleGames = [...games, ...games];
  doubleGames.forEach((game) => {
    const gameElement = document.createElement("div");
    gameElement.classList.add("game");
    gameElement.innerHTML = `
    <img src="${game.background_image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>⭐️ ${game.rating}</p>
    `;
    container.appendChild(gameElement);
  });
}

document.addEventListener("DOMContentLoaded", getGames);
