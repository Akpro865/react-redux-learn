import Posts from './components/Posts'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
