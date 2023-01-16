import React,{Component} from 'react';
import { Aside } from './components/Aside/Aside';
import { Modal } from './components/Modal/Modal';

export class App extends Component {
  state = {
    isOpen:false,
    isOpenModal:false
  }
  handleToggleAside = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  handleToggleModal = () =>{
    this.setState({isOpenModal: !this.state.isOpenModal})
  }
  render() {
    const {isOpen} = this.state
    const {isOpenModal} = this.state
    return <div>
      <Modal isOpenModal = {isOpenModal}/>
      <Aside isOpen ={isOpen} />
      <button onClick = {this.handleToggleAside} className='btn' type='button'>Open Aside</button>
      <button onClick = {this.handleToggleModal} className='btn1' type='button'>Open Modal</button>
    </div>;
  }
}
