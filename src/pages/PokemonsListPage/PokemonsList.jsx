import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import Api from "service/pokemonsList"

const {getPokemons} = Api

const PokemonsList = () => {
        const {query} = useParams()

    const [list, setList] = useState ([])
    useEffect(() => {
        (async () => {
            const pokemonList = (await getPokemons())
            setList(pokemonList.results);
        })() 
       
    }, [])
    return (<>
        <ul>
            {list.map(elem => {
                return (
                    <li key={elem.name}>
                        <Link to={`${elem.name}`}><p>{elem.name }
                        </p></Link>
                        {elem.name === query &&  <Outlet/>}
                </li>
            )})}
        </ul>
       
    </>)
}

export default PokemonsList