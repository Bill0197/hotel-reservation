import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        capacity: 1,
        type: "all",
        minSize: 0,
        maxSize: 0,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        breakfast: false,
        pets: false,
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter((room) => room.featured);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));
        this.setState({
            featuredRooms,
            rooms,
            sortedRooms: rooms,
            loading: false,
            maxSize,
            maxPrice: maxPrice,
            price: maxPrice,
        });
    }
    formatData = (items) => {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((img) => img.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    getRoom = (slug) => {
        let tempRooms = this.state.rooms.slice();
        let room = tempRooms.find((el) => el.slug === slug);
        return room;
    };
    handleChange = ({ target }) => {
        const name = target.name;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const type = target.type;
        this.setState(
            {
                [name]: value,
            },
            this.filterRooms // we should call it to filter the rooms after the state changes
        );
    };

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
        } = this.state;

        let tempRooms = [...rooms];
        // transform values
        // get capacity
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }
        // filter by price
        tempRooms = tempRooms.filter((room) => room.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(
            (room) => room.size >= minSize && room.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }
        this.setState({
            sortedRooms: tempRooms,
        });
    };
    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange,
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {(value) => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}
export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
