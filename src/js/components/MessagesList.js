import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return { contactus: state.contactus }
}

const MessageList = ({ contactus }) => {
    return (
        <div className='gameStatistics'>
            {
                Object.entries(contactus).map(([key, val]) =>
                    <p key={key}>{key}: {val}</p>
                )
            }
        </div>
    );
};

const MessagesList = connect(mapStateToProps)(MessageList)

export default MessagesList