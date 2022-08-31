//botao para selecionar a geração desejada

//para cada pokemon
    //criar uma div
    //index + nome
    //imagem

    //tipo    
    
function criaCard(pokemon) {
    var cardElement = document.getElementById('cards');
    var cardPokemon = document.createElement('div');
    cardPokemon.classList.add('pokemon');

    cardPokemon.innerHTML =  `
    <img src=${pokemon.sprites.front_default}>
    <p><b>${pokemon.id}</b> | ${pokemon.name}</p>
    `;     
    cardElement.appendChild(cardPokemon);
}

var obtemPokemons = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resposta = await fetch(url);
    var pokemon = await resposta.json();
    criaCard(pokemon);
    console.log(pokemon);
}

var percorrePokemons = async () => {
    for(let i = 1; i <= 151; i++) {
        await obtemPokemons(i);
    }
}

percorrePokemons();