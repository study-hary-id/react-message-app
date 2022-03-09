import React from "react";
import MessageView from "./message-view";

class MessageList extends React.Component {
  state = {
    message: {
      from: "John Doe",
      status: "unread",
      content: "Have a nice day!"
    }
  }

  render() {
    return (
      <div className="container">
        <h1>List of Messages</h1>
        <MessageView message={this.state.message} />
      </div>
    );
  }
}

export default MessageList;
