import React from "react"
import List from "./List"
import MessagesList from "./MessagesList"
import Form from "./Form"
import AllRooms from "./Rooms"
import Post from "./Posts"

const App = () => (
    <div>
        <h2>Articles</h2>
        <List />
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div>
            <h2>API posts</h2>
            <Post />
        </div>
        <h2>Message Lists</h2>
        <MessagesList />
        <h2>All Rooms</h2>

        <AllRooms />
    </div>
)

export default App