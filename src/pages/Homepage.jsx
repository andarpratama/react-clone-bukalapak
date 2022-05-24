import React from 'react';
import Category from '../components/homepage/Category';
import Features from '../components/homepage/Feature';
import Banner from '../parts/Banner';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Banner />
        <Features />
        <Category />
      </main>
    );
  }
}

export default Home;
