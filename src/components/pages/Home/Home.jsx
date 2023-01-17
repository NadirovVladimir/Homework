import React,{Component} from "react";
import Aside from "../../Aside/Aside";
import Button from "../../Button/Button";
import styles from '../../../App.module.scss'
import classNames from "classnames/bind";
import { Header } from "../../Header/Header";

const cx = classNames.bind(styles)
export class Home extends Component{
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
      
    render(){
        const { isOpenAside,  textAside} = this.state
        return<div>
        <Header/>
            <div className={styles.container}>
            <div onClick={this.closeAside} className={cx({})}>
        <Aside isOpenAside={isOpenAside} />
        </div>
        <Button className = {styles.btn} click={this.handleToggleAside}   text={textAside} />
</div>
        </div>
        
    }
}