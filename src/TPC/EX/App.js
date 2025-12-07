import React from "react";
class Message extends React.Component {
  constructor() {
    super();
    this.state = { message: "Bienvenue visiteur", btnMessage: "inscription" };
  }
  inscription() {
    this.setState({
      message: "votre inscription est effectuée",
      btnMessage: "merci",
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.inscription()}>
          {this.state.btnMessage}
        </button>
      </div>
    );
  }
}
export default Message;