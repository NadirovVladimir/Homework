import React,{Component} from "react";
import { Header } from "../../components/Header/Header";
import {API} from '../../api'
import Table from "../../components/Table/Table";
import { userColumns } from "./constants";
import { getUsersMap } from "./utils";
import styles from "./User.module.scss"
import { withRouter } from "../../hocs/withRouter";

class Users extends Component {
  state = {
      isOpenAside: false,
      users: [],
  }
  async componentDidMount() {
      this.getUsers()
  }
  getUsers = async () => {
      const users = await API.user.getUsers()
      this.setState({ users })
  }
  onUserRowClick = (userData) => {
  const {navigate} = this.props
  navigate(`/user/${userData.col1}`)
  }

  render() {
      const { users} = this.state
      return (
        <div className={styles.container}>
        <div className={styles.headerCont}>
            <Header  />
        </div>
        <div className={styles.tableC}>
            <Table columns={userColumns} data={getUsersMap(users)} onRowClick={this.onUserRowClick} />
        </div>
    </div>
      )
  }
}
export default withRouter(Users)