import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/hero/Banner';
import { Link } from 'react-router-dom';
import Featured from '../components/featured/Featured';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Now this needs to work" subtitle="High Quality Images">
          <Link to="/photos" className="btn-primary">
            Search Photos
          </Link>
        </Banner>
      </Hero>

      <Featured />
    </>
  );
}
