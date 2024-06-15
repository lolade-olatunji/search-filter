import React from 'react';
import Nav from "../components/nav";
import SearchFilter from '../components/search/filter';
import Footer from "../components/footer";

function home() {
  return (
    <div>
        <Nav />
        <SearchFilter />
        <Footer />
    </div>
  )
}

export default home