import { FETCH_POST, NEW_POST } from './types'
import axios from 'axios'

export const fetchPost = () => dispach => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => dispach({
      type: FETCH_POST,
      payload: posts.data
    }))
}

export const createPost = (postData) => dispach => {
  axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then(post => dispach({
    type: NEW_POST,
    payload: post.data
  }))
}
