import React from 'react'
import Link from 'gatsby-link'
import { SocialIcon } from 'react-social-icons'
import '../layouts/home.css'

const iconSize = { height:35, width:35 }

export default () => (
  <div id='footer'>
    <h1>Stay In Touch</h1>
    <ul className='social-icons'>
      <li><SocialIcon url='mailto:peternguyen008@gmail.com' style={iconSize} /></li>
      <li><SocialIcon url='https://linkedin.com/in/penguyen1'style={iconSize} /></li>
      <li><SocialIcon url='https://github.com/in/penguyen1'style={iconSize} /></li>
      <li><SocialIcon url='https://instagram.com/iadventures'style={iconSize} /></li>
      <li><SocialIcon url='https://yelp.com/user_details?userid=owDqo-ERbE1eUnEgrkARtQ'style={iconSize} /></li>
    </ul>
    <div className='footer-sub'>© Copright 2018 Peter Nguyen - All Rights Reserved</div>
  </div>
);
