import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//  get unique values
const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    let {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        breakfast,
        pets,
        minSize,
        maxSize,
    } = context;

    capacity = parseInt(capacity);
    price = parseInt(price);
    maxPrice = parseInt(maxPrice);
    minPrice = parseInt(minPrice);

    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];

    // map to jsx
    types = types.map((item, i) => (
        <option key={i} value={item}>
            {item}
        </option>
    ));

    // get unique capacity
    let capacities = getUnique(rooms, "capacity");

    // map to jsx
    capacities = capacities.map((item, i) => (
        <option key={i} value={item}>
            {item}
        </option>
    ));

    return (
        <section className="filter-container">
            <Title title="filter rooms" />
            <form className="filter-form">
                {/*  type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        className="form-control"
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* capacity type */}
                <div className="form-group">
                    <label htmlFor="type">room capacity</label>
                    <select
                        className="form-control"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {capacities}
                    </select>
                </div>
                {/* end of capacity type */}
                {/* price type */}
                <div className="form-group">
                    <label htmlFor="price">room price {price}</label>
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control range"
                    />
                </div>
                {/* end of price type */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of size */}

                {/* pets */}
                <div className="form-group ">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                            className="single-extra"
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                            className="single-extra"
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                </div>
                {/* end of pets */}
            </form>
        </section>
    );
}
