import { Component } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss"

const cx  = classNames.bind(styles)

export class Modal extends Component{
  constructor(){
    super()
    this.click = this.click.bind(this)
    this.Minus = this.click.bind(this)
    this.state = {
      a:0
    }
  }
  click(){
    this.setState({a:this.state.a + 1})
  }

render(){
  const {isOpenModal} = this.props
return <modal className={cx('modal',{open:isOpenModal})}>
  <button className={styles.button} onClick={this.click}>Increment</button>
  <h1 className={styles.number}>{this.state.a}</h1>
</modal> 
}
}

