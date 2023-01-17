import { Component } from "react";
import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import styles from "./App.module.scss"
import classNames from "classnames/bind";
import "./index.scss"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Counter } from "./components/pages/Counter/Counter";
import { Home } from "./components/pages/Home/Home";

const cx = classNames.bind(styles)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/counter" element = {<Counter />} />
        <Route path="/" element = {<Home />} />
      </Routes>
      </BrowserRouter>
    )

  }
}

export default App;