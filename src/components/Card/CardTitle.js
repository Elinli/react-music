import React from 'react'
import PropTypes from 'prop-types'
import selected from '../../assets/img/selected.svg'
import './style/title.scss'
export default function CardTitle(props) {
  return (
    <div className='card-title'>
      <div className='left'>
        <div className='title-text'> <img src={selected} alt="selected" /> <span>{props.title}</span></div>
        <div className='card-custom'>
          {props.custom}
        </div>
      </div>

      <div className='right'>{props.more}</div>
    </div>
  )
}

CardTitle.propTypes = {
  title: PropTypes.element,
  more: PropTypes.element,
  custom: PropTypes.element
}
