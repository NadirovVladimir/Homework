import React,{Component} from "react";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import styles from '../../App.module.scss'
import classNames from "classnames/bind";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";

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
      deleteToken = () => {
        localStorage.clear()
      }
    render(){
        const { isOpenAside,  textAside} = this.state
        return<div>
        <Header/>
        <button className={cx('btn')} onClick={this.deleteToken}><Link to='/login' className={cx('link')}>Logout</Link></button>
            <div className={styles.container}>
            <div onClick={this.closeAside} className={cx({})}>
        <Aside isOpenAside={isOpenAside} />
        </div>
        <Button className = {styles.btn} click={this.handleToggleAside}   text={textAside} />
</div>
        </div>
        
    }
}