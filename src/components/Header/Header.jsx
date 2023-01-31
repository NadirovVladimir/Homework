import React, {Component} from "react";
import Button from "../Button/Button";
import styles  from './Header.module.scss'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";


const cx = classNames.bind(styles)
export class Header extends Component {
  state = {
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
    render() {
      const { isOpenAside,  textAside} = this.state
        return (
          <div>
            <div className={styles.container}>
            <div onClick={this.closeAside} className={cx({})}>
        <Aside isOpenAside={isOpenAside} />
        </div>
        <Button className = {styles.btn} click={this.handleToggleAside}   text={textAside} />
</div>
        
          <header className = {styles.contanier} /> 
          </div>
        )
    }
}
