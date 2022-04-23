import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../action/postAction'
import propTypes from 'prop-types'

function Posts(props) {

  useEffect(() =>{
    props.fetchPost()
  }, [])

  return (
    <div>
    <h1>Posts</h1>
      { props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
    }
    </div>
  )
}

Posts.propTypes = {
  fetchPost : propTypes.func.isRequired,
  posts : propTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPost })(Posts)
