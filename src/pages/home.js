import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import '../layouts/home.css'
import bg from '../images/bg.jpg'

export default () => (
  <div>
    <img id='bg_overlay' src={bg} />
    <Header siteTitle={'testing123'} />
    Hi, my name is Peter
    <Footer />
  </div>
);
