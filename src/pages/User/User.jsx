import React,{ Component } from "react";
import { withRouter } from "../../hocs/withRouter";

class User extends Component{
    render(){
        console.log(this.props)
        return <div />
    }
}
export default withRouter(User)