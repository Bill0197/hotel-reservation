import React, { useContext } from "react";
import { RoomContext } from "../context";
import Room from "../components/Room";

export default function RoomsList({ rooms }) {
    const context = useContext(RoomContext);
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortuanately no rooms matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((room) => (
                    <Room key={room.id} room={room} />
                ))}
            </div>
        </section>
    );
}
