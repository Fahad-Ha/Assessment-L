import React from 'react'
import { Card } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

function Programs({ programs }) {
  return (
    <Card className="my-3 p-3 rounded">
    <Link to={`/programs/${programs._id}`}>
        <Card.Img src={programs.image}/>
    </Link>

    <Card.Body>
        <a href={`/programs/${programs._id}`}>
            <Card.Title as="div">
                <strong>{programs.name}</strong>
            </Card.Title>
        </a>
    </Card.Body>

    </Card>
  )
}

export default Programs 
