import React,{Component} from "react";
import classNames from "classnames/bind";
import styles from './Register.module.scss'
import { json, Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

/*const cx = classNames.bind(styles)

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
                <div className={cx('link')}>
                <Link
                to='/login'
                >
                Login
                </Link>
                </div>
            </form>
            </div>
        )
    }
}*/
const users = []
class Register extends Component {
    state = {
        login: "",
        password: "",
        isLoggedin: false,
    }
    onChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        const { login, password } = this.state
        event.preventDefault()
        users.push({ name: login, password: password })
        localStorage.setItem("user", JSON.stringify(users))
    }

    render() {
        const { login, password } = this.state

        return (
            <div className={styles.container}>
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        value={login}
                        onChange={this.onChange}
                        name="login"
                        placeholder="LogIn"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={this.onChange}
                        name="password"
                        placeholder="Password"
                    />
                    <button 
                    className={styles.btn}
                        disabled={!login || !password}
                        type="submit"
                    >
                        Register
                    </button>
                    <Link
                        className={styles.link}
                        to="/login">
                        Login
                    </Link>
                </form>
            </div>
        )
    }
}
export default Register;