import { Box, Grid, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/Index'
import PokemonCard from '../Components/PokemonCard/Index'
import axios from 'axios'

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, [])


    const getPokemons = () => {

        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=50')
            .then((res) => setPokemons(res.data.results))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <NavBar />
            <Container maxWidth='false'>
                <Grid container>

                    {pokemons.map((pokemon) => (
                        <Grid item xs={3}>
                            <PokemonCard />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </div>
    )
}
