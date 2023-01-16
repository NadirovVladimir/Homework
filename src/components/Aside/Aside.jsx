import { Component } from "react";
import classNames from "classnames/bind";
import styles from "./Aside.module.scss"

const cx  = classNames.bind(styles)

export class Aside extends Component{
    render(){
        const {isOpen} = this.props
        return <aside className={cx('aside',{open:isOpen})}></aside>  
    }
}