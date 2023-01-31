import React,{Component} from "react";
import Aside from "../../components/Aside/Aside";
import { Header } from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import {API} from '../../api'
import Table from "../../components/Table/Table";
import { userColumns } from "./constants";
import { getUsersMap } from "./utils";
import styles from "./User.module.scss"

class Users extends Component {
  state = {
      isOpenAside: false,
      users: [],
      posts: [],
  }
  async componentDidMount() {
      this.getUsers()
      this.postUsers()
  }
  getUsers = async () => {
      const users = await API.user.getUsers()
      this.setState({ users })
  }
  postUsers = async () => {
      const posts = await API.post.postUsers()
      this.setState({ posts })
  }
  postsColumns = [
      {
          Header: "User Id",
          accessor: "col1",
      },
      {
          Header: "Id",
          accessor: "col2",
      },
      {
          Header: "Title",
          accessor: "col3",
      },
      {
          Header: "Body",
          accessor: "col4",
      },

  ]
  handleToggleAside = () => {
    const { isOpenAside } = this.state
    this.setState({ isOpenAside: !isOpenAside })
}
  render() {
      const { isOpenAside, users, posts} = this.state
      

      const postsData = posts.map(({userId, id, title, body}) => ({
         col1: userId,
         col2: id,
         col3: title,
         col4: body 
      }))
      return (
        <div className={styles.container}>
        <div className={styles.headerCont}>
            <Aside
                isOpenAside={isOpenAside}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            />
            <Header click={this.handleToggleAside} />
        </div>
        <div className={styles.tableC}>
            <Table columns={userColumns} data={getUsersMap(users)}/>
            <Table columns={this.postsColumns} data={postsData} />
        </div>
    </div>
      )
  }
}
export default Users;