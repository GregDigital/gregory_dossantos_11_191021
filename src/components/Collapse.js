import React from "react";
import Img from "../assets/chevron.png";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      heighEl: [],
      refHeight: React.createRef(),
    };
    this.toggleState = this.toggleState.bind(this);
  }

  componentDidMount() {
    this.setState.heighEl = `${this.state.refHeight.current.scrollHeight}px`;
  }

  toggleState() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }
  render() {
    return (
      <div className="collapse">
        <button onClick={this.toggleState} className="collapse-visible">
          <span>{this.props.label}</span>
          <img
            className={this.state.toggle ? "active" : " "}
            src={Img}
            alt="chevron"
          />
        </button>

        <div
          className={
            this.state.toggle ? "collapse-toggle animated" : "collapse-toggle"
          }
          style={{
            height: this.toggleState ? `${this.state.heightEl}` : "0px",
          }}
          ref={this.state.refHeight}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapse;
