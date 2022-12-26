const url = `https://pokeapi.co/api/v2/pokemon`

const getPokemons = async () => {
    const list = await fetch(url)
        .then((list) => { return list.json() })
        .then((data) => { return data })
        .catch((error) => { console.log(error); })
    
    return list
}
const getPokemonByName = async (query) => {
    const pokemon = await fetch(`${url}/${query}`)
            .then((pokemon) => { return pokemon.json() })
        .then((data) => { return data })
        .catch((error) => { console.log(error); })
return pokemon
}

const Api =  {getPokemons, getPokemonByName}

export default Api