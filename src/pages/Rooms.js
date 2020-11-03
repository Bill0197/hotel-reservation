import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="rooms" subtitle="great rooms">
                <Link to="single-room">
                    <button className="btn-primary">singl room</button>
                </Link>
            </Banner>
        </Hero>
    );
};

export default Rooms;
