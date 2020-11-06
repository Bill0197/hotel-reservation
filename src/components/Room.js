import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
    const { images, price, name, slug } = room;
    return (
        <article className="room">
            <div>
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="room" />
                    <div className="price-top">
                        <h6>$ {price}</h6>
                        <p>per night</p>
                    </div>
                    <Link
                        className="btn-primary  room-link"
                        to={`/rooms/${slug}`}
                    >
                        Features
                    </Link>
                </div>
                <p className="room-info"> {name}</p>
            </div>
        </article>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    }),
};