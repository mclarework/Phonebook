import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {name: "Emergency Services", number:"999"},
      {name: "Me", number: "0800 sleep"}
    ],
    inputOne:"",
    inputTwo:"",
  }

  personAdder = () => {
    if (this.state.inputOne === "" || this.state.inputTwo === "") {
      return
    }else{
      let newObject = {name: this.state.inputOne, number: this.state.inputTwo}
      let temp = this.state.contacts
      temp.push(newObject)
      this.setState({contacts:temp, inputOne: "", inputTwo: ""})
    }
  }

  changeOne = (event) => {
    this.setState({inputOne: event.target.value})
  }

  changeTwo = (event) => {
    this.setState({inputTwo: event.target.value})
  }

  render() {
    return (
      <div className="App" >
        <Phonebook contacts = {this.state.contacts} click = {this.personAdder} fieldOne = {this.changeOne} fieldTwo = {this.changeTwo} inputOne = {this.state.inputOne} inputTwo = {this.state.inputTwo}/>
      </div>
    );
  }
}

const Phonebook = (props) => {
  return (
    <div className = "main" >
      <HeaderBar/>
      <Known contacts = {props.contacts}/>
      <AddContact fieldOne = {props.fieldOne} inputOne={props.inputOne}/>
      <AddNumber fieldTwo = {props.fieldTwo} inputTwo={props.inputTwo}/>
      <Button click = {props.click}/>
    </div>
  )
}

const HeaderBar = () => {
  return (
    <div className = "fullBar header">
      <HeaderOne />
      <HeaderTwo />
    </div>
  )
}

const HeaderOne = () => {
  return <h1 className = "dataBar">Contact</h1>
}

const HeaderTwo = () => {
  return <h1 className = "dataBar">Number</h1>
}

const Known = (props) => {
  return (
    <div className = "allContacts">
      {props.contacts.map((info,index)=>{
        return (
          <div className = "fullBar info" >
            <Contact key={index} name = {info.name}/>
            <Number key={index} number = {info.number}/>
         </div>
        )
      })}
    </div>
  )
}

const Contact = (props) => {
  return <h3 className = "dataBar">{props.name}</h3>
}

const Number = (props) => {
  return <h3 className = "dataBar">{props.number}</h3>
}

const AddContact = (props) => {
  return (
    <div className = "textBox">
      <h3>New Contact</h3>
      <input type="text" onChange={props.fieldOne} value = {props.inputOne}></input>
    </div>
  )
}

const AddNumber = (props) => {
  return (
    <div className = "textBox">
      <h3>New Number</h3>
      <input type ="number" onChange={props.fieldTwo} value = {props.inputTwo}></input>
    </div>
  )
}

const Button = (props) => {
  return <button className = "submit" onClick = {props.click}>SUBMIT</button>
}

export default App;