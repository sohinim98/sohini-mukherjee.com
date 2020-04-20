import React from "react";
import clsx from "clsx";

class FadeInSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
    }
    this.domRef = React.createRef();
    this.setVisible = this.setVisible.bind(this);
  }
  setVisible(isVisible) {
    this.setState({
      isVisible: isVisible,
    });
  }
  componentDidMount() {
    const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => this.setVisible(entry.isIntersecting));
    });
    observer.observe(this.domRef.current);
    return () => observer.unobserve(this.domRef.current);
  }
  render() {
    return (
      <section
        className={clsx('fade-in-section', this.state.isVisible && 'is-visible', this.props.classes)}
        id={this.props.componentId}
        ref={this.domRef}
      >
        {this.props.children}
      </section>
    );
  }
}

export default FadeInSection;
