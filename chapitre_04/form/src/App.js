import React, { isValidElement } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component{
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      checkbox: "false"
    }

    this.putEmail = this.putEmail.bind(this)
    this.checkboxData = this.checkboxData.bind(this)
    this.submitData = this.submitData.bind(this)
    this.putPassword = this.putPassword.bind(this)

  }

  putEmail(e) {
     this.setState({
      email: e.target.value
    })
  }

  putPassword(e) {

    this.setState({
      password: e.target.value
    })
  }

  checkboxData(e) {

    this.setState({
      checkbox: e.target.value
    })
  }

  submitData(e) {

    let email = e.target.value


    const emailValid= /^[^\s@]+@[^\s@]+$/; 

    if(emailValid.test(email)) {
      return "isValid"
    
    } else {
       return"give me valide number"

      
    }
    



  }
  render(){
    return(
      <div>
         
         <div className="col-6 mb-3">
          <div>
            <label for="inputText" class="form-label">Email </label> <br></br>

            <input type="email" id="inputEmail" class="from-label"  onChange={this.putEmail} value={this.state.email}></input>
          </div>
        </div>


        <div className="col-6 mb-3">
          <div>
            <label for="inputPassword" class="form-label">Password</label><br></br>
            <input id="inputPassword" class="pwdInput" onChange={this.putPassword} value={this.state.password}></input>  
          </div>

          <div className="mb-3">
            <input className="mx-1 " id="checkbox" type="checkbox" onClick={this.checkboxData}></input>
            <label className="">Remember Me</label>
          </div>

          <div className="row p-2 ">
            <div className="">
              <button style={{ background: "lightGrey" }} onClick={this.submitData} >Submit</button>
            </div>
          </div>
        </div>

        <p>email: {this.state.email}</p>
        <p>checkbox: {this.state.checkbox}</p>
        <p>password: {this.state.password}</p>


  

      </div>
    )
  }
}



export default App;
