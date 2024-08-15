document.addEventListener('DOMContentLoaded', function() {
    // Preenche o menu suspenso com os nomes dos Pokémons
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(response => response.json())
        .then(data => {
            const pokemonSelect = document.getElementById('pokemonSelect');
            data.results.forEach(pokemon => {
                const option = document.createElement('option');
                option.value = pokemon.name;
                option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                pokemonSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar a lista de Pokémons:', error);
        });
});

document.getElementById('searchBtn').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemonSelect').value.toLowerCase();
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('pokemonResult');
            if (data) {
                resultDiv.innerHTML = `
                    <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
                    <p>Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p>Pokémon não encontrado.</p>`;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar Pokémon:', error);
            const resultDiv = document.getElementById('pokemonResult');
            resultDiv.innerHTML = `<p>Erro ao buscar Pokémon. Tente novamente mais tarde.</p>`;
        });
});

