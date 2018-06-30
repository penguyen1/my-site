import React from 'react'
import Link from 'gatsby-link'

import pita from '../images/pita.jpg'
import '../stylesheets/sass/partials/welcome.scss'

export default () => (
  <div id='welcome'>
    <Link to='/home'>
      <img id='jp_peter' src={pita} />
      <div id='claim'>
        <h1>Welcome</h1>
        <h2>Click to enter</h2>
      </div>
    </Link>
  </div>
);
