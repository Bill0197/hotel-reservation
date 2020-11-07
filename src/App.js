import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import FeaturedRooms from "./components/FeaturedRooms";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms" exact component={Rooms} />
                <Route path="/featured-rooms" exact component={FeaturedRooms} />
                <Route path="/services" exact component={Services} />
                <Route path="/rooms/:slug" exact component={SingleRoom} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
