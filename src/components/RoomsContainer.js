import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 0px auto 100px auto;
`;
export const BtnTop = styled.div`
    width: 100%;
    text-align: center;
    margin: 0px auto 100px auto;
`;

const RoomsContainer = ({ context, display }) => {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            {!display ? (
                <Wrapper display={display}>
                    <Link to="/">
                        <button className="btn-primary">back to home</button>
                    </Link>
                </Wrapper>
            ) : (
                <BtnTop>
                    <a href="#home">
                        <button className="btn-primary">go to top</button>
                    </a>
                </BtnTop>
            )}
        </>
    );
};

export default withRoomConsumer(RoomsContainer);
