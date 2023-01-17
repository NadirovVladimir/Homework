import { Component } from "react";
import styles from "./Aside.module.scss"
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { Navigation } from "./Navigation";


const cx = classNames.bind(styles)

class Aside extends Component {
    render() {
        const {isOpenAside} = this.props
        return (
            <aside className={cx("aside", { open: isOpenAside})} >
            <Navigation />
            </aside>
        )
    }
}
export default Aside;