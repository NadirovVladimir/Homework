import React,{Component} from "react";
import classNames from "classnames/bind";
import styles from './Register.module.scss'
import { json } from "react-router-dom";

const cx = classNames.bind(styles)

const users = [{name:'',password:''}]
export class Register extends Component {
    state = {
        login:"",
        password:""
    }
    onChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        const {login,password} = this.state
        return(
            <div  className={cx('contanier')}>
            <form onSubmit={this.onSubmit}>
                <input 
                value={login}
                onChange={this.onChange}
                type='text' 
                name="login" 
                placeholder="Create Login"/>
                <input 
                value={password}
                onChange={this.onChange}
                type='text' 
                name="password" 
                placeholder="Create Password"/>
                <button disabled = {!login || !password} dis type='submit' >Click</button>
            </form>
            </div>
        )
    }
}