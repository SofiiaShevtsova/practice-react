import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import Api from "service/pokemonsList";

const {getPokemonByName} = Api

const PokemonModal = () => {
    const [pokemon, setPokemon] = useState(null)
    const {query} = useParams()
    useEffect(() => {
                (async () => {
                    const pokemon = (await getPokemonByName(query))
            setPokemon(pokemon);
        })() 
    }, [query])
    return (<>
        <p>Modal OPEN</p> 
       {pokemon && <img src={pokemon.sprites.back_default} alt="#" />}
    </>)
}

export default PokemonModal