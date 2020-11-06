import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "../components/Loading";
import { withRoomConsumer,  } from "../context";


function RoomContainer(){

}


export default withRoomConsumer(RoomContainer)


// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import Loading from "../components/Loading";
// import { RoomConsumer } from "../context";

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const { loading, sortedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }
