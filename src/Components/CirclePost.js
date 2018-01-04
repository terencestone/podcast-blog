import React from 'react'
import { CSSTransition, transit } from "react-css-transition";
import styles from "../Styles/inline-styles/circle-styles"

const CirclePost = (props) => {
  const { post, isActive, showTitle,
          handleHover, handleBlur,
          dissectTitle, handleClick } = props

  return (
    <div
      key={post.id}
      className='circle-container'
      onMouseOver={() => handleHover(post.slug)}
      onMouseOut={(e) => handleBlur(e, post.slug)}
      onClick={() => handleClick(post.id)}>
      <CSSTransition
        defaultStyle={styles.defaultTitle}
        enterStyle={styles.onEnterTitle}
        leaveStyle={styles.onLeaveTitle}
        activeStyle={styles.activeTitle}
        active={showTitle}>
        <h3 className='title'>{dissectTitle(post.title)}</h3>
      </CSSTransition>
      <CSSTransition
        defaultStyle={styles.defaultTransition}
        enterStyle={styles.onEnter}
        leaveStyle={styles.onLeave}
        activeStyle={styles.active}
        active={isActive}>
        <img className='circle-post' src={post.featured_image} />
      </CSSTransition>
    </div>
  )
}

export default CirclePost