import Section from './Section';
import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <article>
        {this.props.browsers.map((browser) => (
          <Section
            name={browser.name}
            logo={browser.logo}
            description={browser.description}
          />
        ))}
      </article>
    );
  }
}

export default Article;
