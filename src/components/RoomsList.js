import React, { useContext } from "react";
import { RoomContext } from "../context";
import Room from "../components/Room";

export default function RoomsList() {
    const context = useContext(RoomContext);

    return (
        <section className="rooms">
            <h1>Rooms</h1>
        </section>
    );
}
