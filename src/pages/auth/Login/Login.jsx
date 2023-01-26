import React,{Component} from "react";
import classNames from "classnames/bind";
import styles from './Login.module.scss'
import { Link, Navigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";



const users = JSON.parse(localStorage.getItem("user"))
class Login extends Component {
    state = {
        login: "",
        password: "",
        isLoggedin: false,

    }
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit = (event) => {
        event.preventDefault()
        const { login, password } = this.state
        const foundUser = users.find(item => item.name === login && item.password === password)
        
        if (foundUser) {
            localStorage.setItem("token", true)
            this.setState({ isLoggedin: true })
        }
    }
    render() {
        const { login, password, isLoggedin } = this.state
        return isLoggedin ? <Navigate to="/" /> : (
            <div className={styles.container}>
                <h1>LogIn</h1>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        value={login}
                        onChange={this.onChange}
                        name="login"
                        placeholder="LogIn" />
                    <Input
                        type="password"
                        value={password}
                        onChange={this.onChange}
                        name="password"
                        placeholder="Password" />
                    <Button 
                        disabled={!login || !password}
                        type="submit"
                        text="Login" />
                    <Link
                        className={styles.link}
                        to="/register">
                        Register
                    </Link>
                </form>
            </div>
        )
    }
}
export default Login;