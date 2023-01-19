import React,{Component} from "react";
import { Route,Navigate } from "react-router-dom";

export class PubliceRoute extends Component{
    render(){
        const token = localStorage.getItem('token')
        const {children} = this.props

        if(token){
        return <Navigate to="/"/>
        }
        return children ;
    }
}