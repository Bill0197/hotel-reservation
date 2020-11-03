import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/">
                    <button className="btn-primary">return Home</button>
                </Link>
            </Banner>
        </Hero>
    );
};

export default Error;