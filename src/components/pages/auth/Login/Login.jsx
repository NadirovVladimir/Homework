import React,{Component} from "react";
import classNames from "classnames/bind";
import styles from './Login.module.scss'
import { Link, Navigate } from "react-router-dom";

const cx = classNames.bind(styles)
const users = [{name:'John',password:'123'},{name:'Mark',password:'333'}]
export class Login extends Component{
    state = {
        login:'',
        password:'',
        isLogined:false
    }
    onChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        const {login,password} = this.state
        const foundUser = users.find(item => item.name === login && item.password === password)
        if(foundUser){
        localStorage.setItem('token',true)
        this.setState({isLogined:true})
        }
    }
    render(){
        const { login,password,isLogined} = this.state
        return  isLogined ?  <Navigate to="/" /> :(
        <div className={cx('contanier')}>
            <form onSubmit={this.onSubmit}>
                <input value= {login} 
                onChange={this.onChange} 
                type='text' 
                name="login" 
                placeholder="Login"/>
                <input 
                value= {password} 
                onChange={this.onChange} 
                type='text' 
                name="password" 
                placeholder="Password"/>
                <button disabled = {!login || !password} type='submit' >Click</button>
                <div className={cx('link')}>
                <Link
                to="/register"
                >
                Register
                </Link>
                </div>
            </form>
        </div>
        )
    }
}