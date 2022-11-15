/*
Promise API Call.
Get pokemons details by passing in pokemon name to call
access JSON using dot notation.
*/
fetch("https://www.pokeapi.co/api/v2/pokemon/rayquaza") // promise for api call
    .then(res => res.json()) 
    .then((result) => { 
        pokemon = result; 
        console.log("Name: \n",pokemon.name);
        console.log("Weight: \n", pokemon.weight);
        console.log("Abilities: \n", pokemon.abilities);
    }),
    (error) => {
        console.log(error);
    }