import { BasicRouter } from './router/BasicRouter'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <BasicRouter />
    </Provider>
  )
}

export default App
