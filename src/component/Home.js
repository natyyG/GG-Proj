import React from 'react'
import { Link } from 'react-router-dom'

import Events from './Events'
import Intro from './Intro'
import Navigation from './Navigation'
import Upcoming from './Upcoming'

function Home() {
  return (
    <div>
      <Navigation />
      <Intro />
      <Events />
      <Upcoming />
    </div>
  )
}

export default Home