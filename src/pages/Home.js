import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomsContainer from "../components/RoomsContainer";

const Home = () => {
    return (
        <section id="home">
            <Hero>
                <Banner
                    title="magnificent rooms"
                    subtitle="You won't regret your stay, we promise!!!"
                >
                    <Link to="/rooms">
                        <button className="btn-primary">our rooms</button>
                    </Link>
                </Banner>
            </Hero>
            <Services display="true" />
            <FeaturedRooms display="true" />
            <RoomsContainer display="true" />
        </section>
    );
};

export default Home;
