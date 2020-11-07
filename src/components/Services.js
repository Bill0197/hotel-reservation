import React, { Component } from "react";
import Title from "./Title";
import {
    FaBus,
    FaCoffee,
    FaCar,
    FaUserMd,
    FaDesktop,
    FaWifi,
    FaTaxi,
    FaFish,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 40px auto 0 auto;
    display: ${({ display }) => display && "none"};
`;

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaFish />,
                title: "fishing on the beach",
                info: "You will have a great time fishing",
                id: 1,
            },
            {
                icon: <FaTaxi />,
                title: "Taxi",
                info: "We will arrange taxi for your appointments",
                id: 9,
            },
            {
                icon: <FaBus />,
                title: "free shuttle",
                info: "Free shuttle for your gruop to get to your destination",
                id: 3,
            },
            {
                icon: <FaCar />,
                title: "car rental",
                info:
                    "Car rental servies which have pretty good cars for reasonable price",
                id: 5,
            },
            {
                icon: <FaWifi />,
                title: "Free wifi",
                info: "Free wifi all over the hotel",
                id: 8,
            },
            {
                icon: <FaCoffee />,
                title: "free coffee",
                info: "Endless coffee for you",
                id: 15,
            },
            {
                icon: <FaUserMd />,
                title: "doctor on call",
                info: "Call our doctor to get consultancy",
                id: 10,
            },
            {
                icon: <FaDesktop />,
                title: "desktops for use",
                info:
                    "Get your online job done using our desktops in your room",
                id: 6,
            },
        ],
    };
    render() {
        return (
            <section id="services" className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((el) => (
                        <article className="service" key={el.id}>
                            <span>{el.icon}</span>
                            <h6>{el.title}</h6>
                            <p>{el.info}</p>
                        </article>
                    ))}
                </div>
                <Wrapper display={this.props.display}>
                    <Link to="/">
                        <button className="btn-primary">back to home</button>
                    </Link>
                </Wrapper>
            </section>
        );
    }
}
