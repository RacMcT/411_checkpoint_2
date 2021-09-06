
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux/store"
import Router from "./Router"
import Dashboard from "./containers/Dashboard.js"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
