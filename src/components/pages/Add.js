import React, { Component} from 'react';
import { Link }from 'react-router-dom';
import './Add.css';
import '../../App.css';

export default class Add extends Component {
  state = {
    name: '',
    phone:'',
}

onSubmit = e => {
    e.preventDefault();
    this.props.addDetail(this.state.name, this.state.phone);
    this.setState({name: ''});
    this.setState({phone: ''});
}

onChange = e => this.setState({[e.target.name]: e.target.value});


render() {
  return (
    <React.Fragment>
    <Link to = "/"> Back </Link>
    <div className="form-container">
      <form onSubmit = {this.onSubmit}>
        <label><b>Name:</b></label> <br/>
            <input
                type = "text"
                name = "name"
                placeholder = "Name"
                value = {this.state.name}
                onChange = {this.onChange}
                className = "input"
            required/> <br/>
            <label><b>Phone:</b></label> <br/>
            <input
                type = "text"
                name = "phone"
                placeholder = "Mobile no:"
                value = {this.state.phone}
                onChange = {this.onChange}
                className = "input"
             required/> <br/>
            <label><h1>Subscriber to be added</h1></label>
            <label>NAME: {this.state.name} </label> <br/>
            <label>PHONE: {this.state.phone} </label> <br/>
            <input
              type = "submit"
              name = "Submit"
              style = {{flex: '1'}}
              className = "button" 
            />
       </form>
    </div>
    </React.Fragment>
  )
  }
}
