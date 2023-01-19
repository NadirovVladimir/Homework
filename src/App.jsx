import { Component } from "react";
import styles from "./App.module.scss"
import classNames from "classnames/bind";
import "./index.scss"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Counter } from "./components/pages/Counter/Counter";
import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/auth/Login/Login";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { PubliceRoute } from "./components/routes/PublicRoute";
import { Register } from "./components/pages/auth/Register/Register";

const cx = classNames.bind(styles)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route 
        path="/counter" 
        element = {(
        <PrivateRoute>
          <Counter />
          </PrivateRoute> )} />
        <Route 
        path="/" element = {(
        <PrivateRoute>
          <Home />
          </PrivateRoute>)} />
        <Route  
        path="/login" 
        element = {
        <PubliceRoute >
          <Login />
          </PubliceRoute>}
          />
          <Route 
          path="/register"
          element = {
            <PubliceRoute>
              <Register />
            </PubliceRoute>
          }
          />
      </Routes>
      </BrowserRouter>
    )

  }
}

export default App;