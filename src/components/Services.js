import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info:
                    "lorem ipsum dolor sit amet, djf testing the stuff on tthe what tpye",
                id: 1,
            },
            {
                icon: <FaBeer />,
                title: "strong beer",
                info:
                    "lorem ipsum dolor sit amet, djf testing the stuff on tthe what tpye",
                id: 2,
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info:
                    "lorem ipsum dolor sit amet, djf testing the stuff on tthe what tpye",
                id: 3,
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info:
                    "lorem ipsum dolor sit amet, djf testing the stuff on tthe what tpye",
                id: 4,
            },
        ],
    };
    render() {
        return (
            <section className="services">
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
            </section>
        );
    }
}
