import React,{Component} from "react"
import { Link, NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

export class Navigation extends Component {
    render() {
        return (
            <navigation>
            <NavLink
            className = {styles.link}
            to = "/"
            >
                Home
            </NavLink>
            <NavLink
            className = {styles.link}
            to = "/counter"
            >
                Counter
            </NavLink>
            <NavLink
            className = {styles.link}
            to = "/login"
            >
                Login
            </NavLink>
            <NavLink
            className = {styles.link}
            to = "/users"
            >
                Users
            </NavLink>
            </navigation>
        )
    }
}
export default Navigation