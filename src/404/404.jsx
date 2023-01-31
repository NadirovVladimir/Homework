import React from "react";
import { Link } from "react-router-dom";


export class NotFound404 extends React.Component{
    render(){
        return <div style={{height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
    <div>
        <h1>Page Not Found</h1>
        <Link to="/">Home</Link>
    </div>
        </div>
    }
}