import { Button, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useState } from "react"

const Theme = createTheme({

    palette: {
        primary: {
            main: "#007bff",
        },

        background: {
            default: "#f0f0f0",
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: "Arial",
    },

    shape: {
        borderRadius: 12
    }


})



const Form = ({ }) => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    return (

        <ThemeProvider theme={Theme}>

            <form>
                <TextField
                    label="Nome"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    fullWidth
                    margin='normal'
                ></TextField>

                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin='normal'
                ></TextField>


                <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                >Enviar</Button>

            </form>
            

        </ThemeProvider>

    )
}
       



export default Form;