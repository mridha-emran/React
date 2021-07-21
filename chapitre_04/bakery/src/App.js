import React from 'react';
import './App.css';
import Button from './component/button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pay from './component/pay';
import Add from './component/Add';
import List from './component/List';

import './style/global.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      activeTab:"add",
      items:[]

    }
      this.selectAdd= this.selectAdd.bind(this)
      this.selectList=this.selectList.bind(this)
      this.selectPay=this.selectPay.bind(this)
  }

  selectAdd () {
    this.setState({
      activeTab: "Add"
    })
  }

  selectList (){
    this.setState({
      activeTab: "List"
    })
  }

  selectPay () {
    this.setState({
      activeTab: "Pay"
    })
  }
  addItem(name, price) {
    const item = { "name": name, "price": parseInt(price) }
    this.setState({
      items: [this.state.items, item]
    })
    console.log(this.state.items);
  }

  render(){
    return(
      <div>
         <h1>Bakery</h1>
         <ul className="header">
          <li><button className={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.selectAdd}> Add </button></li>
          <li><button className={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.selectList}> List </button></li>
          <li><button className={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.selectPay}> Pay </button></li>

            
        </ul>
        <div class="row">
            {this.state.activeTab === "Add" && <Add></Add>}
            {this.state.activeTab === "List" && <List></List>}
            {this.state.activeTab === "Pay" && <Pay></Pay>}
          </div>

      </div>
    )
  }

}


export default App;
