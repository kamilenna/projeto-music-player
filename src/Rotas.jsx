import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SearchPage from "./Pages/SearchPage/SearchPage";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/busca" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;