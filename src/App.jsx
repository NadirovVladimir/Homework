import React, {Component} from "react";
import { Aside } from "./components/Aside/Aside";

export class App extends Component {
  render() {
    return <div>
      <Aside isOpen/>
    </div>;
  }
}
