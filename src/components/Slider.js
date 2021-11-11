import { Component } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    this.state.current >= this.props.pictures.length - 1
      ? this.setState({ current: 0 })
      : this.setState({ current: this.state.current + 1 });
  }

  prevSlide() {
    this.state.current === 0
      ? this.setState({ current: this.props.pictures.length - 1 })
      : this.setState({ current: this.state.current - 1 });
  }

  render() {
    return (
      <section className="slider">
        <img
          className="sliderPic"
          src={this.props.pictures[this.state.current]}
          alt="logement"
        />
        {this.props.pictures.length > 1 ? (
          <div>
            <FaChevronLeft className="left" onClick={this.prevSlide} />
            <FaChevronRight className="right" onClick={this.nextSlide} />
          </div>
        ) : (
          ""
        )}
        <p className="count">
          {this.state.current + 1}/{this.props.pictures.length}
        </p>
      </section>
    );
  }
}

export default Slider;
