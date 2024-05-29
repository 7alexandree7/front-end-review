import React from "react";
import Contato from "../Components/Contato";
import Home from "../Components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const RouteApp = () => {

    <Router>
        <Routes>
            <Route path="../Components/home" element={<Home/>}></Route>
            <Route path="../Components/contato" element={<Contato/>}></Route>
        </Routes>
    </Router>
}




export default RouteApp;