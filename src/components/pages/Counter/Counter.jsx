import React,{Component} from "react";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import styles from '../../../App.module.scss'
import classNames from "classnames/bind";
import Aside from "../../Aside/Aside";
import { Navigation } from "../../Aside/Navigation";
import { Header } from "../../Header/Header";

const cx = classNames.bind(styles)
export class Counter extends Component{
    state = {
        isOpenModal: false,
        bgc: false,
        textModal: "Open Modal",
        isOpenAside: false,
        textAside: "Open Aside",
      };
      handleToggleAside = () => {
        this.setState({isOpenAside: true,
          textAside: "Close Aside"})
      }
      closeAside = () => {
        this.setState({isOpenAside: false,
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
          textModal: "Open Modal"})
      }
    render(){
        const {  bgc, textModal, isOpenModal,isOpenAside,  textAside} = this.state
        return <div>
<Header/>
            <div className={styles.container}>
            <div onClick={this.closeAside} className={cx({})}>
        <Aside isOpenAside={isOpenAside} />
        </div>
        <Button className = {styles.btn} click={this.handleToggleAside}   text={textAside} />
</div>
<div>
            <Button click={this.handleToggleModal} text={textModal} />
        <div onClick={this.closeModal} className={cx({}, {bgc:bgc})}>
          <Modal isOpenModal={isOpenModal} />
          </div>
          </div>
    </div>
    }
}