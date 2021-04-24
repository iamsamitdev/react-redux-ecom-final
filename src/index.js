import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/main.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Routes from './Routes'

// เรียกใช้ state จาก localstorage
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
