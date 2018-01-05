import React from 'react'

const Flyout = (props) => {
  const { summary, title } = props

  return (
    <div style={{zIndex: 99, right: -370}} className='custom-flyout'>
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  )
}

export default Flyout