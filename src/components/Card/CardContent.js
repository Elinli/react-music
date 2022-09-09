import React from 'react'
import PropTypes from 'prop-types'

export default function CardContent(props) {
  return props.content
}

CardContent.propTypes = {
  content: PropTypes.element
}
