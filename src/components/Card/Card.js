import React from 'react'
import PropTypes from 'prop-types'
export default function Card(props = { title: <h4>标题</h4>,content: <div>标题</div> }) {
  return (
    <div className='card'>
      <div className='card-title'>
        {props.title}
      </div>
      <div className='card-content'>
        {props.content}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.element,
  content: PropTypes.element
}
