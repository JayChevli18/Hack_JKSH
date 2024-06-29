import React from 'react'
import "./Card.scss"

export default function Card(props) {
  const { card } = props;
  return (
    <>
      <div className='card-item'>
        {card.image &&
          <img src='https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png'
          onMouseDown={event => event.preventDefault()}/>
        }
        {card.title}
      </div>
    </>
  )
}
