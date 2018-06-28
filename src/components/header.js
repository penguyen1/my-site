import React from 'react'
import Link from 'gatsby-link'
import { SocialIcon } from 'react-social-icons'
import '../layouts/header.css'
import me from '../images/meh.jpg'

export default () => (
  <div id='header'>
    <img className='header-pic' src={me} />
    <h1>Peter Nguyen</h1>
    <h5>New York | Boston</h5>
    <ul className='header-list'>
      <li>Software Developer</li>
      <li>Basketball-er</li>
      <li>Foodie</li>
      <li>Sneakerhead</li>
      <li>Professional Cuddler</li>
    </ul>
  </div>
);
