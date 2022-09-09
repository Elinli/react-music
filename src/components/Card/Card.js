import React from 'react'
import PropTypes from 'prop-types'
import './style/index.scss'
export default function Card(props = { title: <h4>标题</h4>,content: <div>标题</div> }) {
  return (
    <div className='card'>
      {props.title}
      {props.content}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.element,
  content: PropTypes.element
}
