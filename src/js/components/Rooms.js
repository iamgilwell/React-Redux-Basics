import React from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return { rooms: state.rooms }
}

const RoomList = ({ rooms }) => {
    console.log(rooms);

    return (
        <div>
            Rooms will go here
            {rooms
                .map((rooms, index) =>
                    <div key={index}>
                        {rooms.roomName}
                        {Object.values(rooms.details).map((rooms, index) => <p key={index}> {rooms}</p>)}
                    </div>
                )
            }
        </div>
    )
}

const AllRooms = connect(mapStateToProps)(RoomList)

export default AllRooms