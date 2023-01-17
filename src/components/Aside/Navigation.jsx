import React,{Component} from "react"
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export class Navigation extends Component {
    render() {
        return (
            <navigation>
            <Link  to="/" className = {styles.link}>Home</Link>
            <Link to = "/counter" className = {styles.link}>Counter</Link>
            </navigation>
        )
    }
}