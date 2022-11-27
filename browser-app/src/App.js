import React from 'react';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import browsers from './data/browsers';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Navigation browsers={browsers} />
        <Article browsers={browsers} />
        <Footer />
      </div>
    );
  }
}

export default App;
