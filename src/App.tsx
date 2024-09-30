import './App.css'
import { Provider } from 'react-redux'
import { Chat } from './chat/Chat'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      Hello
      <Chat/>
    </Provider>
  )
}

export default App
