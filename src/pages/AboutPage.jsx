
import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About the Feedback</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt consequatur sint possimus corporis error, est tenetur. Hic, iure quia!</p>
        <p>Lorem, ipsum dolor.</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage