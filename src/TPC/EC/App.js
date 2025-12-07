import React from "react";
class Compteur extends React.Component {
  constructor() {
    super();
    this.state = { compteur: 0 };
  }
  incrementer() {
    this.setState({
        compteur: this.state.compteur + 1});
  }
  decrementer() {
    this.setState({
        compteur: this.state.compteur - 1});
  }
  render() {
    return (
      <div>
        <p>
          compteur <span>{this.state.compteur}</span>
        </p>
        <button onClick={() => this.incrementer()}>incrementer</button>
        <button onClick={() => this.decrementer()}>decrementer</button>
      </div>
    );
  }
}
export default Compteur;
