import React, { Component } from 'react';
import { Link, BrowserRouter as HashRouter, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Add from './components/pages/Add';
import PhonebookDetails from './components/layout/PhonebookDetails';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    details: [
      {
        id: uuid.v4(),
        name:'',
        phone:''
      },
    ]
  }

  //del details 
  delDetails = (id) => {
    this.setState({ details: [...this.state.details.filter(detail => detail.id !== id)]});
  }
  //Add details
  addDetail = (name,phone) => {
    const newDeatails = {
      id: uuid.v4(),
      name,
      phone,
    }
    this.setState({ details: [...this.state.details, newDeatails]})
  }
  render() {
    return (
      <HashRouter>
        <div className="main-container">
          <div className="component-container">
            
            <Route exact path = "/" render = {props => (
              <React.Fragment>
              <Header title={"PHONE DIRECTORY"}/>
                <div className="component-body-container">
                 <Link to = "/add" className="button"> ADD </Link>
                 <table>
                    <tbody>
                      <th>NAME</th> <th>PHONE</th> <th></th>
                      <PhonebookDetails details={this.state.details} delDetails={this.delDetails} />
                    </tbody>
                 </table>
                 </div>
              </React.Fragment>
            )}/>
            <Route path = "/add"  exact render={
              () => {
                return (<div>
                  <Header title={"ADD SUBSCRIBER"}/>
                  <Add addDetail={this.addDetail} />
                 </div>
              )}
            }/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
