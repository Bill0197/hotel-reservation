import React, { Component } from "react";
import { RoomContext } from "../context";
import defaultImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { StyledHero } from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props, " props");
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg: defaultImg,
        };
    }
    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            );
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            pets,
            breakfast,
            images,
        } = room;
        const [img1, ...defaultImgs] = images;
        return (
            <>
                <StyledHero img={img1 || this.state.defaultImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImgs.map((item, i) => (
                            <img key={i} src={item} alt="single room" />
                        ))}
                    </div>
                    <article className="single-room-info">
                        <div>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </div>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: $ {price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>Max Capacity: {capacity} people</h6>
                            <h6>
                                {pets
                                    ? "Pets :  allowed"
                                    : "Pets : Not Allowed"}
                            </h6>
                            {breakfast && <h6> free breakfast included</h6>}
                        </article>
                    </article>

                    <article className="room-extras">
                        <h6>Extras</h6>

                        <ul className="extras">
                            {extras.map((el, i) => (
                                <li key={i}> - {el} </li>
                            ))}
                        </ul>
                    </article>
                </section>
            </>
        );
    }
}
