// export default  function Header(props) {
//   return <h1 style={props.style}>{props.cont}</h1>;
// };
// cllass
import React from "react";
export default class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return <h1 style={this.props.color}>{this.props.cont}</h1>;
  }
}
