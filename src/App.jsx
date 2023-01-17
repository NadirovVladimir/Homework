import { Component } from "react";
import Aside from "./components/Aside/Aside";
import Button from "./components/Button/Button";
import styles from "./App.module.scss"
import classNames from "classnames/bind";
import "./index.scss"
import Modal from "./components/Modal/Modal";
const cx = classNames.bind(styles)
class App extends Component {
  state = {
    isOpenAside: false,
    isOpenModal: false,
    bgc: false,
    textAside: "Open Aside",
    textModal: "Open Modal",
  };

  handleToggleAside = () => {
    this.setState({isOpenAside: true,
      bgc: true,
      textAside: "Close Aside"})
  }
  closeAside = () => {
    this.setState({bgc: false,
      isOpenAside: false,
      textAside: "Open Aside"})
  }
  handleToggleModal = () => {
    const {isOpenModal} = this.state
    this.setState({isOpenModal: !isOpenModal,
      textModal: "Close Modal"})
  }
  closeModal = () => {
    this.setState({bgc: false,
      isOpenModal: false,
      textModal: "Open Aside"})
  }
  
 
  render() {
    const { isOpenAside, bgc, textAside, textModal, isOpenModal} = this.state
    return (
      <div className={styles.container}>
        <div onClick={this.closeAside} className={cx({}, {bgc: bgc})}>
        <Aside isOpenAside={isOpenAside} />
        </div>
        <Button click={this.handleToggleAside}   text={textAside} />
        <Button click={this.handleToggleModal} text={textModal} />
        <div onClick={this.closeModal} className={cx({}, {bgc:bgc})}>
          <Modal isOpenModal={isOpenModal}/>
          </div>
      </div>
    )

  }
}

export default App;