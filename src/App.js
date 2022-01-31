import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Covidessentials from "./Components/Covidessentials";
import Healthcaredevices from "./Components/Healthcaredevices";
import Healthfoodanddrinks from "./Components/Healthfoodanddrinks";
import Personalcare from "./Components/Personalcare";
import Ayurvediccare from "./Components/Ayurvediccare";
import Motherandbabycare from "./Components/Motherandbabycare";
import Skincare from "./Components/Skincare";
import Homecare from "./Components/Homecare";

export const healthCareContext = React.createContext();

const url = "https://mocki.io/v1/0cc22698-e8a9-4ff9-91f8-d53b9e5540ed";

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState([cart.length]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(url);
    setData(res.data);
  };

  return (
    <>
      <BrowserRouter>
        <healthCareContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue }}
        >
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/covidessentials" element={<Covidessentials />} />
            <Route path="/healthcaredevices" element={<Healthcaredevices />} />
            <Route
              path="/healthfoodanddrinks"
              element={<Healthfoodanddrinks />}
            />
            <Route path="/personalcare" element={<Personalcare />} />
            <Route path="/ayrvediccare" element={<Ayurvediccare />} />
            <Route path="/mother&babycare" element={<Motherandbabycare />} />
            <Route path="/skincare" element={<Skincare />} />
            <Route path="/homecare" element={<Homecare />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </healthCareContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
