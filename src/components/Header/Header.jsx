import React, {Component} from "react";
import Button from "../Button/Button";
import styles  from './Header.module.scss'



export class Header extends Component {
    render() {
        return (
          <header className = {styles.contanier} /> 
        )
    }
}
