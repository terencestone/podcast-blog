import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { butter } from '../Constants'
import { FaAngleRight, FaAngleLeft } from 'react-icons/lib/fa/'
import CirclePost from './CirclePost'

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      activeId: null,
      showTitle: false,
      titleStyles: {},
    };
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    let page = this.props.match.params.page || 1;

    this.fetchPosts(page)
  }

  componentDidMount() {
    setTimeout(() => this.bendTitle(), 2000)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.match.params.page || 1;

    this.fetchPosts(page)
  }

  handleHover = (id) => {
    this.setState({
      activeId: id
    })

    setTimeout(() => {
      this.setState({
        showTitle: true
      })
    }, 500)
  }

  handleBlur = (e, id) => {
    // stopPropagation ensures no react warning on click
    e.stopPropagation()
    if (this.state.activeId === id) {
      this.setState({
        activeId: null,
        showTitle: false
      })
    }
  }

  dissectTitle = (title) => {
    const ellipsis = ['.', '.', '.']
    title = title.split('')

    if (title.length > 40) {
      title.length = 40
      title = [title, ellipsis]
      title = title.reduce((a, b) => (a.concat(b)))
    }

    return title.map((char, i) => (
      <span
        key={`char-${i}`}
        className='title-char'
        style={this.state.titleStyles[`char-${i}`]}
        id={`char-${i}`}>
        {char}
      </span>
    ))
  }

  bendTitle = () => {
    let style = {}
    const posts = this.state.resp.data
    let title

    posts.forEach((post) => {
      title = post.title.split('')
      return (
        title.map((char, i) => (
          style[`char-${i}`] = { transform: `rotate(${(i * 8) - 110}deg)` }
        ))
      )
    })

    this.setState({
      titleStyles: style
    })
  }

  mapCirclePosts = () => {
    const posts = this.state.resp.data
    let isActive
    let showTitle

    return posts.map((post, i) => {
      isActive = this.state.activeId === post.slug
      showTitle = isActive && this.state.showTitle

      // TODO: need to account for arrows when no posts at 3 or 5 index
      return (
        <div key={post.id} className='circle-image-container'>
          { i === 3
            ? <FaAngleLeft
              onClick={() => this.handleArrowClick('prev')}
              className='arrow lft' />
            : null }
          <CirclePost
            post={post}
            isActive={isActive}
            showTitle={showTitle}
            handleHover={this.handleHover}
            handleBlur={this.handleBlur}
            dissectTitle={this.dissectTitle}
            handleClick={() => this.props.history.push(`/post/${post.slug}`)} />
          { i === 5
            ? <FaAngleRight
              onClick={() => this.handleArrowClick('next')}
              className='arrow rt' />
            : null }
        </div>
      )
    })
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;
      console.log(this.state.resp.data)
      return (
        <div className='blog-feed'>
          <div className='circle-posts-container'>
            {this.mapCirclePosts()}
          </div>

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{height: window.innerHeight}} />
      )
    }
  }
}

// {this.state.resp.data.map((post) => {
//             return (
//               <div className='post-preview' key={post.slug}>
//                 <img
//                   onClick={() =>
//                     this.props.history.push(`/post/${post.slug}`)}
//                   className='post-image' src={post.featured_image}
//                   alt='post media' />
//                 <Link className='post-link' to={`/post/${post.slug}`}>
//                   {post.title}
//                 </Link>
//               </div>
//             )
//           })}

export default BlogHome;