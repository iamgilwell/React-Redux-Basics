import React from "react"
import List from "./List"
import MessagesList from "./MessagesList"
import Form from "./Form"
import AllRooms from "./Rooms"

const App = () => (
    <div>
        <h2>Articles</h2>
        <List />
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
        <h2>Message Lists</h2>
        <MessagesList />
        <h2>All Rooms</h2>

        <AllRooms />
    </div>
)

export default App