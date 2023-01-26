import { Component } from "react";
import styles from "./Modal.module.scss"
import classNames from "classnames/bind";
import Button from "../Button/Button";
const cx = classNames.bind(styles)
class Modal extends Component {
    render() {
        const {isOpenModal} = this.props
        return (
            <div className={cx("container", {openModal: isOpenModal})}>
                <div className={styles.modal} />
            </div>
        )
        
    }
}


export default Modal;