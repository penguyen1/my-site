import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import '../stylesheets/css/home.css'
import bg from '../images/bg.jpg'

export default () => (
  <div>
    <img id='bg_overlay' src={bg} />
    <Header siteTitle={'testing123'} />
    <section id='first'>
      About me: personal info
    </section>
    <section id='second'>
      About me: professional and achievements
    </section>
    <Footer />
  </div>
);
