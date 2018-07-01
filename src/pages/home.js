import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import { SocialIcon } from 'react-social-icons'
const iconSize = { height:35, width:35 }

import bg from '../images/bg.jpg'
import hello from '../images/hello.jpg'
import boom from '../images/ccboom.png'
import feet from '../images/happyfeet.png'
import dipity from '../images/citydipity.png'
import pad from '../images/padticular.png'
import alexa from '../images/seasons.jpg'
import '../stylesheets/sass/partials/home.scss'

export default () => (
  <div>
    <img id='bg_overlay' src={bg} />
    <Header siteTitle={'testing123'} />
    <section id='first'>
      <img className='sect-img' src={hello} />
      <div className='sect-text'>
        <h2>Hellooooooooo there!</h2>
        My name is Peter Nguyen, but you can just call me Pete. I am vietnamese, 
        born and raised in Brooklyn, New York, and have two younger sisters. 
        I am a die-hard New York Knicks fan, coffee drinker, aging athlete, 
        wannabe music lover and skinny binge eater.
        <br/><br/>
        In my professional life, I am a Boston-based software developer with experience
        in React, JavaScript, SQL, Ruby/Rails and PHP - just to name a few. I enjoy being 
        challenged <i style={{ fontWeight:200 }}>(if it's not, what fun is there in that?)</i>, 
        working with the latest technologies, learning anything new to expand my peanut-sized 
        brain, and using my (super)power of turning ideas into reality through code.
      </div>
    </section>
    <section id='second'>
      <h2>Projects</h2>
      <div className='project-item'>
        <img className='project-img' src={alexa} />
        <div className='overlay'>
          <div className='overlay-title'>Seasonal Foods</div>
          <div className='overlay-desc'>
             This Alexa Skill (Amazon's voice service) will tell you the best
             seasonal ingredients from any season of the year and give you tips
             on how to select the ripest ones. All you have to do is ask Alexa!
          </div>
          <div className='overlay-links'>
            <SocialIcon url='https://github.com/penguyen1/seasonalFoods' style={iconSize} color='#ee6a50' />
          </div>
        </div>
      </div>
      <div className='project-item'>
        <img className='project-img' src={boom} />
        <div className='overlay'>
          <div className='overlay-title'>click, click, BOOM!</div>
          <div className='overlay-desc'>
            modern multiplayer twist to the classic game: Minesweeper
          </div>
          <div className='overlay-links'>
            <SocialIcon url='https://github.com/penguyen1/click_click_BOOM' style={iconSize} color='#ee6a50' />
          </div>
        </div>
      </div>
      <div className='project-item'>
        <img className='project-img' src={feet} />
        <div className='overlay'>
          <div className='overlay-title'>HappyFeet</div>
          <div className='overlay-desc'>
            full-stack and server-side rendering Sneaker web application
          </div>
          <div className='overlay-links'>
            <SocialIcon url='https://github.com/penguyen1/happyFeet' style={iconSize} color='#ee6a50' />
          </div>
        </div>
      </div>
      <div className='project-item'>
        <img className='project-img' src={dipity} />
        <div className='overlay'>
          <div className='overlay-title'>Citydipity</div>
          <div className='overlay-desc'>
            Dynamic multi-player scavenger hunt web application
          </div>
          <div className='overlay-links'>
            <SocialIcon url='https://github.com/dropTHATdatabase/project3' style={iconSize} color='#ee6a50' />
          </div>
        </div>
      </div>
      <div className='project-item'>
        <img className='project-img' src={pad} />
        <div className='overlay'>
          <div className='overlay-title'>Padticular</div>
          <div className='overlay-desc'>
            Tinder-style apartment searching React Native mobile application
          </div>
          <div className='overlay-links'>
            <SocialIcon url='https://github.com/penguyen1/Padticular' style={iconSize} color='#ee6a50' />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
