import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <img
          src={this.props.logo}
          alt={this.props.name}
        />
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default Section;
