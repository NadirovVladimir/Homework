import React,{Component} from "react";
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import styles from '../../App.module.scss'
import classNames from "classnames/bind";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
export class Home extends Component{
    
      deleteToken = () => {
        localStorage.clear()
      }
    render(){
        return<div>
        <Header/>
        <button onClick={this.deleteToken} className = {styles.btn}><Link to="/login" className={styles.link}>Logout</Link></button>    
</div>
    }
}