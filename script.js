//Index range for each pokemon generation

const firstGen = [1, 151];
const secondGen = [152, 251];
const thirdGen = [252, 386];
const fourthGen = [387, 493];
const fifthGen = [494, 649];
const sixthGen = [650, 721];
const seventhGen = [722, 809];
const eightGen = [810, 905];
  
    
//Fetches the API

var getPokemons = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const resposta = await fetch(url);
        var pokemon = await resposta.json();
        createCard(pokemon);
    } catch(erro) {
        throw new Error(erro);
    }
}


// Creates cards

function createCard(pokemon) {
    var cardElement = document.getElementById('cards');
    var cardPokemon = document.createElement('div');
    cardPokemon.classList.add('pokemon');

    cardPokemon.innerHTML =  `
    <img src=${pokemon.sprites.front_default}>
    <p><b>${pokemon.id}</b> | ${pokemon.name}</p>
    `;     
    cardElement.appendChild(cardPokemon);
}
    
// Displays only the selected generation

function selectGeneration(gen) {
    clearScreen();
    iteratesPokemons(gen);
}

function iteratesPokemons(gen) {
    for(let i = gen[0]; i <= gen[1]; i++) {
        getPokemons(i);
    }
}

function clearScreen() {
    var selecionaCards = document.querySelectorAll('.pokemon');
    selecionaCards.forEach(pokemon =>
        pokemon.remove());
}
