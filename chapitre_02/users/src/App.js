import React from "react"
import './App.css';
import users from"./user.json"
import Userinfo from"./conponent/userinfo"

class App extends React.Component{
  render(){
    return(
      <div>
          {users.map((user)=>(
            <Userinfo name={user.name} email={user.email} />
          )
            
            
          )}
      </div>
    )
  }
}
export default App;
