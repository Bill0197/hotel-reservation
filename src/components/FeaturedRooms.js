import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 40px auto 0 auto;
    display: ${({ display }) => display && "none"};
`;

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map((room) => <Room key={room.id} room={room} />);

        return (
            <section id="featuredRooms" className="featured-rooms ">
                <Title title="featured rooms" />
                <section className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </section>
                <Wrapper display={this.props.display}>
                    <Link to="/">
                        <button className="btn-primary">back to home</button>
                    </Link>
                </Wrapper>
            </section>
        );
    }
}
