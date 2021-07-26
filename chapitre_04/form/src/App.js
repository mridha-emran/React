import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component{
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      checkbox: false,
      isValidEmail: false,
      isValidPassword: false,
      isSubmit:false,
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

    let email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email_validator_regex.test(e.target.value)){
        this.setState({isValidEmail:true})}
        
        else{
        this.setState({isValidEmail:false})
    }
  }

  putPassword(e) {

    this.setState({
      password: e.target.value
    })
    if (e.target.value.length >= 6) {
      this.setState({ isValidPassword: true })
    } else {
      this.setState({ isValidPassword: false })
    }
  }

  checkboxData(e) {

    this.setState({
      checkbox: e.target.value
    })
  }

  submitData(e) {
     console.log("click")
    if (this.state.isValidEmail === true && this.state.isValidPassword === true) {
            this.setState({isSubmit:true})
    }
      
    }
    



  
  render(){
        if(this.state.isSubmit===true){
          return(
            <div className="card_text">
              <h1>login</h1>
              <h2>form submite</h2>

            </div>
          )
        }
    
    return(
      <div>
         
         <div className="col-6 mb-3">
          <div>
            <label for="inputText" class="form-label">Email </label> <br></br>

            <input type="email" id="inputEmail" class={this.state.isValidEmail ? "is-valid form-control": "is-invalid form-control"} onChange={this.putEmail} value={this.state.email}></input>
          </div>
        </div>


        <div className="col-6 mb-3">
          <div>
            <label for="inputPassword" class="form-label">Password</label><br></br>
            <input id="inputPassword" class={this.state.isValidPassword ? "is-valid form-control" : "is-invalid form-control"} onChange={this.putPassword} value={this.state.password}></input>  
          </div>

          <div className="mb-3">
            <input className="mx-1 " id="checkbox" type="checkbox" onClick={this.checkboxData}></input>
            <label className="">Remember Me</label>
          </div>

          <div className="row p-2 ">
            <div className="mb-3">
              <button type="submit" style={{ background: "lightGrey" }}  onClick={this.submitData} >Submit</button>
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
