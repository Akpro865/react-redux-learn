import { useState } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { createPost } from '../action/postAction'

function PostForm(props) {

  const [val, setVal] = useState({
    title: '',
    body: ''
  })

  const onsubmit = (e) =>{
    e.preventDefault()

    const post = {
      title : val.title,
      body : val.body
    }
    props.createPost(post)
  }

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={onsubmit}>
        <div>
          <label>Title : </label>
          <input type='text' name='title' value={val.title} onChange={e =>setVal({[e.target.name]: e.target.value})} />
        </div>
        <br />
        <div>
          <label>Body : </label>
          <textarea type='text' name='body' value={val.body} onChange={e =>setVal({[e.target.body]: e.target.value})} />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  createPost : propTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
