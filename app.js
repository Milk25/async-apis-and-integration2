// Replace these with your keys
const PUBLIC_KEY = "4d52fb3fa1ef52af3d6b38218aff5477";
const PRIVATE_KEY = "7580dcfcebb5cfce0fd516bdf421694cc073c096";
const TIMESTAMP = 1
const HASH = "a80ea7d0806646c1f3b6bf37422fc6fd"; // Use the MD5 hash generator to create this

const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

async function fetchCharacters() {
  const url = `${BASE_URL}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Characters:", data.data.results);
    return data.data.results; // Return the characters array
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}


function updateUI(characters) {
    const container = document.getElementById("character-container");
  
    characters.forEach(character => {
      const characterCard = document.createElement("div");
      characterCard.classList.add("character-card");
  
      const name = document.createElement("h3");
      name.textContent = character.name;
  
      const thumbnail = document.createElement("img");
      thumbnail.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
      thumbnail.alt = character.name;
  
      characterCard.appendChild(thumbnail);
      characterCard.appendChild(name);
      container.appendChild(characterCard);
    });
  }
  
  // Initialize and fetch data
  document.addEventListener("DOMContentLoaded", async () => {
    const characters = await fetchCharacters();
    if (characters) {
      updateUI(characters);
    }
  });






