import { Box, Grid, Container } from '@mui/material'
import React from 'react'
import NavBar from '../Components/NavBar/Index'
import PokemonCard from '../Components/PokemonCard/Index'

export const Home = () => {

    return (
        <div>
            <NavBar />
            <Container maxWidth='false'>
                <Grid container>

                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>

                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>

                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>

                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>


                </Grid>
            </Container>
        </div>
    )
}
