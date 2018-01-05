import React from 'react'
import { CSSTransition } from "react-css-transition";
import styles from "../Styles/inline-styles/circle-styles"

const CirclePost = (props) => {
  const { post, isActive, handleHover,
          handleBlur, handleClick } = props

  return (
    <div
      key={post.id}
      className='circle-container'
      onMouseOver={() => handleHover(post.slug)}
      onMouseOut={(e) => handleBlur(e, post.slug)}
      onClick={() => handleClick(post.id)}>
      <CSSTransition
        defaultStyle={styles.defaultTransition}
        enterStyle={styles.onEnter}
        leaveStyle={styles.onLeave}
        activeStyle={styles.active}
        active={isActive}>
        <img alt='featured' className='circle-post' src={post.featured_image} />
      </CSSTransition>
    </div>
  )
}

export default CirclePost