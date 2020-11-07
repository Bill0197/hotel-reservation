import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner
                    title="our rooms"
                    subtitle="Our spectacular rooms will surely leave a good impression on you"
                >
                    <Link to="/">
                        <button className="btn-primary">return home</button>
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
};

export default Rooms;
