const pokeName = document.getElementById('pokeName');
const pokeHP = document.getElementById('pokeHP');
const pokeImg = document.getElementById('pokeImg');
const pokeTypes = document.getElementById('pokeTypes');
const pokeAtk = document.getElementById('pokeAtk');
const pokeDef = document.getElementById('pokeDef');
const pokeSpd = document.getElementById('pokeSpd');
const generateBtn = document.getElementById('generateBtn');
const card = document.getElementById('pokemonCard');
const downloadBtn = document.getElementById('downloadBtn');

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

// Fetch a random Pokemon
async function getPokemon() {
    const id = Math.floor(Math.random() * 150) + 1; // Gen 1 only for nostalgia/simplicity
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Simple loading state
    pokeName.innerText = "Scanning...";
    pokeImg.style.opacity = 0.5;

    try {
        const res = await fetch(url);
        const data = await res.json();
        renderPokemon(data);
    } catch (err) {
        console.error(err);
        pokeName.innerText = "Error!";
    }
}

function renderPokemon(data) {
    pokeName.innerText = data.name;
    pokeHP.innerText = data.stats[0].base_stat; // HP is usually index 0
    pokeImg.src = data.sprites.other["official-artwork"].front_default;
    pokeImg.style.opacity = 1;

    // Stats
    // Order in API: 0:hp, 1:attack, 2:defense, 3:special-attack, 4:special-defense, 5:speed
    pokeAtk.innerText = data.stats[1].base_stat;
    pokeDef.innerText = data.stats[2].base_stat;
    pokeSpd.innerText = data.stats[5].base_stat;

    // Types
    pokeTypes.innerHTML = '';
    const mainType = data.types[0].type.name;

    // Set card background via CSS variable or style
    const themeColor = typeColors[mainType];
    card.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 0%, #ffffff 60%)`;
    card.style.boxShadow = `0 0 0 10px ${themeColor}, 0 0 0 20px #333, 0 10px 40px rgba(0,0,0,0.5)`;

    data.types.forEach(t => {
        const typeName = t.type.name;
        const badge = document.createElement('span');
        badge.classList.add('type-badge');
        badge.style.backgroundColor = typeColors[typeName];
        badge.innerText = typeName;
        pokeTypes.appendChild(badge);
    });
}

function downloadCard() {
    // Hide buttons temporarily if they are inside the capture area (they are not in my HTML, but good practice)
    // We capture #cardArea to include the padding/shadow
    html2canvas(document.getElementById('cardArea'), {
        backgroundColor: null, // transparent
        scale: 2 // high quality
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${pokeName.innerText}-card.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}

generateBtn.addEventListener('click', getPokemon);
downloadBtn.addEventListener('click', downloadCard);

// Load one on start
window.addEventListener('load', getPokemon);
